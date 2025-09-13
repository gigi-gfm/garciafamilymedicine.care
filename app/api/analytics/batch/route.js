import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { actions, timestamp, event } = await request.json();
    
    // Validate incoming data
    if (!Array.isArray(actions) || actions.length === 0) {
      return NextResponse.json(
        { error: 'Invalid actions data' },
        { status: 400 }
      );
    }

    // Process and sanitize actions data
    const processedActions = actions.map(action => ({
      sessionId: action.sessionId,
      actionType: action.actionType,
      timestamp: action.timestamp,
      url: sanitizeUrl(action.url),
      data: sanitizeActionData(action.data),
      userAgent: action.userAgent,
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 'unknown'
    }));

    // Here you would integrate with your analytics storage system
    // Examples: 
    // - Database (PostgreSQL, MongoDB, etc.)
    // - Analytics services (Google Analytics Measurement Protocol, Mixpanel, etc.)
    // - Data warehouses (BigQuery, Snowflake, etc.)
    
    console.log('Batch analytics received:', {
      actionCount: processedActions.length,
      event: event,
      timestamp: timestamp
    });

    // Example: Send to Google Analytics Measurement Protocol
    try {
      await sendToGoogleAnalytics(processedActions);
    } catch (gaError) {
      console.error('Failed to send to Google Analytics:', gaError);
    }

    // Example: Store in database
    try {
      await storeInDatabase(processedActions);
    } catch (dbError) {
      console.error('Failed to store in database:', dbError);
    }

    // Example: Send to external analytics service
    try {
      await sendToExternalService(processedActions);
    } catch (serviceError) {
      console.error('Failed to send to external service:', serviceError);
    }

    return NextResponse.json(
      { 
        success: true, 
        processed: processedActions.length,
        timestamp: Date.now()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Batch analytics processing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Sanitize URL to remove sensitive parameters
function sanitizeUrl(url) {
  try {
    const urlObj = new URL(url);
    
    // Remove potentially sensitive query parameters
    const sensitiveParams = ['token', 'key', 'password', 'email', 'phone'];
    sensitiveParams.forEach(param => {
      urlObj.searchParams.delete(param);
    });
    
    return urlObj.toString();
  } catch {
    return 'invalid-url';
  }
}

// Sanitize action data to remove PII/PHI
function sanitizeActionData(data) {
  if (!data || typeof data !== 'object') return data;

  const sanitized = { ...data };
  
  // Remove potentially sensitive fields
  const sensitiveFields = [
    'email', 'phone', 'ssn', 'creditCard', 'password',
    'firstName', 'lastName', 'address', 'dateOfBirth'
  ];
  
  sensitiveFields.forEach(field => {
    delete sanitized[field];
  });

  // Sanitize text content to remove potential PII
  if (sanitized.text && typeof sanitized.text === 'string') {
    sanitized.text = sanitizeText(sanitized.text);
  }

  return sanitized;
}

// Sanitize text to remove potential PII patterns
function sanitizeText(text) {
  if (!text) return text;

  return text
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, '[SSN]') // SSN pattern
    .replace(/\b\d{3}-\d{3}-\d{4}\b/g, '[PHONE]') // Phone pattern
    .replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, '[EMAIL]') // Email pattern
    .replace(/\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g, '[CARD]') // Credit card  pattern
    .substring(0, 200); // Limit length
}

// Send to Google Analytics Measurement Protocol
async function sendToGoogleAnalytics(actions) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const apiSecret = process.env.GA_MEASUREMENT_PROTOCOL_SECRET;
  
  if (!measurementId || !apiSecret) {
    throw new Error('Google Analytics configuration missing');
  }

  const events = actions.map(action => {
    const baseEvent = {
      name: 'custom_behavior_tracking',
      params: {
        action_type: action.actionType,
        page_path: new URL(action.url).pathname,
        timestamp: action.timestamp,
        session_id: action.sessionId
      }
    };

    // Add specific parameters based on action type
    switch (action.actionType) {
      case 'click':
        baseEvent.params.element_type = action.data.element;
        baseEvent.params.element_text = action.data.text?.substring(0, 50);
        break;
      case 'scroll':
        baseEvent.params.scroll_depth = action.data.depth;
        break;
      case 'form':
        baseEvent.params.form_action = action.data.action;
        baseEvent.params.form_id = action.data.formId;
        break;
      case 'section_time':
        baseEvent.params.section_id = action.data.sectionId;
        baseEvent.params.time_spent = action.data.timeSpent;
        break;
    }

    return baseEvent;
  });

  // Send to GA4 Measurement Protocol
  const response = await fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: actions[0]?.sessionId || 'unknown',
        events: events
      })
    }
  );

  if (!response.ok) {
    throw new Error(`GA Measurement Protocol error: ${response.status}`);
  }
}

// Store in database (example implementation)
async function storeInDatabase(actions) {
  // This is where you would implement your database storage
  // Example using a hypothetical database client:
  
  /*
  const db = await getDatabaseConnection();
  
  for (const action of actions) {
    await db.collection('user_behavior').insertOne({
      sessionId: action.sessionId,
      actionType: action.actionType,
      timestamp: new Date(action.timestamp),
      url: action.url,
      data: action.data,
      userAgent: action.userAgent,
      ipAddress: action.ipAddress,
      createdAt: new Date()
    });
  }
  */
  
  // For now, just log that we would store in database
  console.log(`Would store ${actions.length} actions in database`);
}

// Send to external analytics service
async function sendToExternalService(actions) {
  // Example integration with external service (Mixpanel, Amplitude, etc.)
  
  /*
  const serviceEndpoint = process.env.ANALYTICS_SERVICE_ENDPOINT;
  const serviceApiKey = process.env.ANALYTICS_SERVICE_API_KEY;
  
  if (!serviceEndpoint || !serviceApiKey) {
    throw new Error('External analytics service configuration missing');
  }

  const response = await fetch(serviceEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${serviceApiKey}`
    },
    body: JSON.stringify({
      events: actions.map(action => ({
        event_name: `behavior_${action.actionType}`,
        properties: {
          ...action.data,
          session_id: action.sessionId,
          timestamp: action.timestamp,
          url: action.url
        }
      }))
    })
  });

  if (!response.ok) {
    throw new Error(`External service error: ${response.status}`);
  }
  */
  
  console.log(`Would send ${actions.length} actions to external service`);
}

// OPTIONS handler for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
