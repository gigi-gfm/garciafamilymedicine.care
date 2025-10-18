'use client';

import React, { useState } from 'react';

export default function MedicalWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      alert('Thank you for your message! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={styles.container}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img 
          src="https://via.placeholder.com/150x50/1e3a8a/ffffff?text=Garcia+Family+Medicine" 
          alt="Garcia Family Medicine" 
          style={styles.logo}
        />
      </div>

      {/* MEGA EVENT BANNER - NOVEMBER 6TH - FIRST THING VISIBLE! */}
      <section style={styles.megaEventBanner} >
        <div style={styles.urgentBadge}>🎊 EXCLUSIVE EVENT 🎊</div>
        <div style={styles.mustRsvpBanner}>⚠️ MUST RSVP ASAP - SPOTS FILLING FAST! ⚠️</div>
        
        {/* FIRST 5 BONUS BANNER */}
        <div style={styles.bonusSavingsBanner}>
          <div style={styles.bonusIcon}>💰</div>
          <div style={styles.bonusText}>
            <div style={styles.bonusTitle}>FIRST 5 TO RSVP RECEIVE</div>
            <div style={styles.bonusAmount}>$150 SAVINGS!</div>
          </div>
          <div style={styles.bonusIcon}>💰</div>
        </div>

        <h2 style={styles.megaEventTitle}>
          FALL INTO CONFIDENCE + VETERANS APPRECIATION EVENT
        </h2>
        <div style={styles.eventDateBox}>
          <div style={styles.eventDate}>📅 THURSDAY, NOVEMBER 6TH</div>
          <div style={styles.eventTime}>🕒 3:00 PM - 7:00 PM</div>
          <div style={styles.rsvpRequired}>✋ RSVP REQUIRED ✋</div>
        </div>
        <div style={styles.eventHighlights}>
          <div style={styles.highlight}>
            <span style={styles.highlightIcon}>🎁</span>
            <span style={styles.highlightText}>BRING A FRIEND<br/>WIN A PRIZE!</span>
          </div>
          <div style={styles.highlight}>
            <span style={styles.highlightIcon}>🇺🇸</span>
            <span style={styles.highlightText}>20% OFF<br/>FOR VETERANS</span>
          </div>
          <div style={styles.highlight}>
            <span style={styles.highlightIcon}>🪑</span>
            <span style={styles.highlightText}>LIVE EMSELLA<br/>DEMOS</span>
          </div>
          <div style={styles.highlight}>
            <span style={styles.highlightIcon}>🍪</span>
            <span style={styles.highlightText}>REFRESHMENTS<br/>PROVIDED</span>
          </div>
        </div>
        <p style={styles.eventSubtext}>
          Experience our revolutionary treatments • Meet our team • Special event pricing • Fun giveaways!
        </p>
        <div style={styles.urgencyNotice}>🔥 LIMITED AVAILABILITY - RESERVE YOUR SPOT TODAY! 🔥</div>
        <div style={styles.bannerCTA}>
          <a href="#contact" style={styles.megaEventCTAButton}>
            ⚡ RSVP NOW - DON'T MISS OUT! ⚡
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.mainTitle}>Garcia Family Medicine</h1>
          <h2 style={styles.subtitle}>Compassionate Care for Your Whole Family</h2>
          <p style={styles.heroDescription}>
            Providing comprehensive healthcare services with a personal touch. 
            Your health and wellness are our top priorities.
          </p>
          <div style={styles.ctaContainer}>
            <a href="#contact" style={styles.ctaButton}>Schedule Appointment</a>
            <a href="#services" style={styles.secondaryButton}>Our Services</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>15+</div>
            <div style={styles.statLabel}>Years of Experience</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>5000+</div>
            <div style={styles.statLabel}>Patients Served</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>98%</div>
            <div style={styles.statLabel}>Patient Satisfaction</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Emergency Support</div>
          </div>
        </div>
      </section>

      {/* New Patients Banner */}
      <section style={styles.eventBanner}>
        <h3 style={styles.eventTitle}>🎉 Now Accepting New Patients!</h3>
        <p style={styles.eventDetails}>Call today to schedule your first appointment</p>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <p style={styles.sectionSubtitle}>Comprehensive healthcare for every stage of life</p>
        
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>👨‍⚕️</div>
            <h3 style={styles.serviceTitle}>Primary Care</h3>
            <p style={styles.serviceDescription}>
              Routine check-ups, preventive care, and chronic disease management for the whole family.
            </p>
          </div>
          
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>💉</div>
            <h3 style={styles.serviceTitle}>Vaccinations</h3>
            <p style={styles.serviceDescription}>
              Complete vaccination services for children and adults, including flu shots and travel vaccines.
            </p>
          </div>
          
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>🩺</div>
            <h3 style={styles.serviceTitle}>Wellness Exams</h3>
            <p style={styles.serviceDescription}>
              Annual physicals, health screenings, and personalized wellness plans.
            </p>
          </div>
          
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>👶</div>
            <h3 style={styles.serviceTitle}>Pediatric Care</h3>
            <p style={styles.serviceDescription}>
              Specialized care for infants, children, and adolescents with a gentle approach.
            </p>
          </div>
          
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>💊</div>
            <h3 style={styles.serviceTitle}>Chronic Disease Management</h3>
            <p style={styles.serviceDescription}>
              Expert management of diabetes, hypertension, asthma, and other chronic conditions.
            </p>
          </div>
          
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>🔬</div>
            <h3 style={styles.serviceTitle}>Lab Services</h3>
            <p style={styles.serviceDescription}>
              On-site laboratory testing for quick and accurate diagnostic results.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutContent}>
          <div style={styles.aboutText}>
            <h2 style={styles.aboutTitle}>About Dr. Garcia</h2>
            <p style={styles.aboutParagraph}>
              With over 15 years of experience in family medicine, Dr. Garcia is dedicated to 
              providing personalized, compassionate care to patients of all ages.
            </p>
            <p style={styles.aboutParagraph}>
              Our practice focuses on building long-term relationships with our patients, 
              understanding their unique health needs, and providing comprehensive care in a 
              warm, welcoming environment.
            </p>
            <p style={styles.aboutParagraph}>
              We believe in treating the whole person, not just symptoms, and working together 
              with our patients to achieve optimal health and wellness.
            </p>
          </div>
          <div>
            <img 
              src="https://via.placeholder.com/500x400/1e3a8a/ffffff?text=Dr.+Garcia" 
              alt="Dr. Garcia" 
              style={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Patients Say</h2>
        <div style={styles.testimonialsGrid}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "Dr. Garcia took the time to listen to all my concerns and explained everything 
              clearly. I finally feel like I have a doctor who truly cares!"
            </p>
            <div style={styles.testimonialAuthor}>Maria Rodriguez</div>
            <div style={styles.testimonialRole}>Patient since 2019</div>
          </div>
          
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "The entire staff is friendly and professional. They always make my kids feel 
              comfortable during visits. Highly recommend!"
            </p>
            <div style={styles.testimonialAuthor}>John Smith</div>
            <div style={styles.testimonialRole}>Patient since 2020</div>
          </div>
          
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "Best family doctor we've ever had. Dr. Garcia is knowledgeable, caring, and 
              always available when we need help."
            </p>
            <div style={styles.testimonialAuthor}>Sarah Johnson</div>
            <div style={styles.testimonialRole}>Patient since 2018</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <p style={styles.sectionSubtitle}>Schedule an appointment or ask us a question</p>
        
        <div style={styles.contactForm}>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.formTextarea}
            />
          </div>
          
          <button onClick={handleSubmit} style={styles.submitButton}>
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Garcia Family Medicine</h3>
            <p style={styles.footerText}>
              Providing quality healthcare to our community for over 15 years.
            </p>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Contact Info</h3>
            <p style={styles.footerText}>123 Medical Plaza Dr.</p>
            <p style={styles.footerText}>Blue Springs, MO 64015</p>
            <p style={styles.footerText}>Phone: (816) 555-1234</p>
            <p style={styles.footerText}>Email: info@garciafamilymedicine.care</p>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Hours</h3>
            <p style={styles.footerText}>Monday - Friday: 8am - 6pm</p>
            <p style={styles.footerText}>Saturday: 9am - 2pm</p>
            <p style={styles.footerText}>Sunday: Closed</p>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Follow Us</h3>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialIcon}>📘</a>
              <a href="#" style={styles.socialIcon}>📷</a>
              <a href="#" style={styles.socialIcon}>🐦</a>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p>© 2024 Garcia Family Medicine. All rights reserved.</p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(220, 38, 38, 0.6), 0 0 60px rgba(37, 99, 235, 0.5), 0 0 90px rgba(234, 179, 8, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 60px rgba(220, 38, 38, 1), 0 0 120px rgba(37, 99, 235, 0.8), 0 0 180px rgba(234, 179, 8, 0.6);
            transform: scale(1.03);
          }
        }

        @keyframes glowGreen {
          0%, 100% {
            box-shadow: 0 8px 30px rgba(22, 163, 74, 0.6);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 12px 50px rgba(22, 163, 74, 1), 0 0 80px rgba(251, 191, 36, 0.6);
            transform: scale(1.02);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes autumnGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(234, 88, 12, 0.5), 0 0 40px rgba(146, 64, 14, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(234, 88, 12, 0.9), 0 0 80px rgba(146, 64, 14, 0.6), 0 0 120px rgba(251, 146, 60, 0.4);
            transform: scale(1.02);
          }
        }

        @keyframes buttonPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 15px 50px rgba(234, 179, 8, 0.8);
          }
        }

        @keyframes flashUrgent {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.02);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .autumn-glow {
          animation: autumnGlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'white',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  logoContainer: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 1000,
    background: 'white',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  logo: {
    display: 'block',
  },
  hero: {
    background: 'white',
    padding: '4rem 2rem',
    textAlign: 'center',
    borderBottom: '1px solid #e5e7eb',
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#1e3a8a',
  },
  subtitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#ea580c',
    fontWeight: 500,
  },
  heroDescription: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#64748b',
    lineHeight: 1.6,
  },
  ctaContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  ctaButton: {
    background: '#1e3a8a',
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'background 0.3s',
    cursor: 'pointer',
  },
  secondaryButton: {
    background: '#ea580c',
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'background 0.3s',
    cursor: 'pointer',
  },
  
  // MEGA EVENT BANNER - COMBINED FALL + VETERANS EVENT
 megaEventBanner: {
  background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 25%, #2563eb 50%, #ea580c 75%, #dc2626 100%)',
  backgroundSize: '400% 400%',
  padding: '3rem 2rem',
  paddingTop: '1rem',
  textAlign: 'center',
  position: 'relative',
  overflow: 'visible',
  borderTop: '8px solid #eab308',
  borderBottom: '8px solid #eab308',
  display: 'block',
  minHeight: '600px',
  width: '100%',
    display: 'inline-block',
    background: '#eab308',
    color: '#1e293b',
    padding: '0.75rem 2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 900,
    marginBottom: '1rem',
    letterSpacing: '3px',
    boxShadow: '0 4px 15px rgba(234, 179, 8, 0.6)',
  },
  mustRsvpBanner: {
    background: '#dc2626',
    color: 'white',
    padding: '1rem 2rem',
    fontSize: '1.4rem',
    fontWeight: 900,
    letterSpacing: '2px',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 20px rgba(220, 38, 38, 0.8)',
    borderRadius: '8px',
    animation: 'flashUrgent 2s ease-in-out infinite',
  },
  bonusSavingsBanner: {
    background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
    padding: '1.5rem 2rem',
    marginBottom: '2rem',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    boxShadow: '0 8px 30px rgba(22, 163, 74, 0.6)',
    animation: 'glowGreen 2.5s ease-in-out infinite',
    border: '4px solid #fbbf24',
    maxWidth: '900px',
    margin: '0 auto 2rem auto',
  },
  bonusIcon: {
    fontSize: '3.5rem',
    animation: 'bounce 1s ease-in-out infinite',
  },
  bonusText: {
    textAlign: 'center',
  },
  bonusTitle: {
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 700,
    letterSpacing: '2px',
    marginBottom: '0.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  bonusAmount: {
    color: '#fbbf24',
    fontSize: '3rem',
    fontWeight: 900,
    letterSpacing: '3px',
    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
  },
  megaEventTitle: {
    color: 'white',
    fontSize: '2.8rem',
    fontWeight: 900,
    margin: '0 0 1.5rem 0',
    textShadow: '4px 4px 8px rgba(0,0,0,0.7)',
    letterSpacing: '2px',
    lineHeight: '1.2',
  },
  eventDateBox: {
    background: 'rgba(255,255,255,0.95)',
    display: 'inline-block',
    padding: '1.5rem 3rem',
    borderRadius: '15px',
    marginBottom: '2rem',
    boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
  },
  eventDate: {
    color: '#dc2626',
    fontSize: '2rem',
    fontWeight: 900,
    marginBottom: '0.5rem',
  },
  eventTime: {
    color: '#ea580c',
    fontSize: '1.8rem',
    fontWeight: 800,
  },
  rsvpRequired: {
    marginTop: '0.75rem',
    color: '#dc2626',
    fontSize: '1.3rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
 urgencyNotice: { 
  background: 'rgba(220, 38, 38, 0.95)',  // More opaque
  color: 'white',
  padding: '1.2rem 2.5rem',  // More padding
  fontSize: '1.5rem',  // Bigger text
  fontWeight: 900,
  letterSpacing: '2px',
  marginTop: '1.5rem',
  marginBottom: '0.5rem',
  borderRadius: '8px',
  display: 'inline-block',
  textShadow: '2px 2px 6px rgba(0,0,0,0.8)',  // Add shadow
  border: '3px solid white',  // Add white border
},
eventHighlights: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1.5rem',
  maxWidth: '1000px',
  margin: '2rem auto',
  padding: '0 1rem',
},
megaEventCTAButton: {
  display: 'inline-block',
  background: '#fbbf24',
  color: '#1e293b',
  padding: '1.8rem 4rem',
  borderRadius: '50px',
  fontSize: '1.8rem',
  fontWeight: 900,
  textDecoration: 'none',
  transition: 'all 0.3s',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  border: '4px solid white',
  letterSpacing: '2px',
  textTransform: 'uppercase',
},
  highlight: {
    background: 'rgba(255,255,255,0.95)',
    padding: '0 1rem',
},
megaEventCTAButton: {
  display: 'inline-block',
  background: '#fbbf24',
  color: '#1e293b',
  padding: '1.8rem 4rem',
  borderRadius: '50px',
  fontSize: '1.8rem',
  fontWeight: 900,
  textDecoration: 'none',
  transition: 'all 0.3s',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  border: '4px solid white',
  letterSpacing: '2px',
  textTransform: 'uppercase',
},
highlight: {padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s',
  },
  highlightIcon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '0.5rem',
  },
  highlightText: {
    color: '#1e293b',
    fontSize: '1.1rem',
    fontWeight: 800,
    lineHeight: '1.3',
    display: 'block',
  },
  eventSubtext: {
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 600,
    margin: '1.5rem 0 2rem 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  urgencyNotice: {
  background: 'rgba(220, 38, 38, 0.95)',
  color: 'white',
  padding: '1.2rem 2.5rem',
  fontSize: '1.5rem',
  fontWeight: 900,
  letterSpacing: '2px',
  marginTop: '1.5rem',
  marginBottom: '0.5rem',
  borderRadius: '8px',
  display: 'inline-block',
  textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
  border: '3px solid white',
},
  megaEventCTAButton: {
    display: 'inline-block',
    background: '#eab308',
    color: '#1e293b',
    padding: '1.5rem 3.5rem',
    borderRadius: '50px',
    fontSize: '1.5rem',
    fontWeight: 900,
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
    border: '4px solid white',
    letterSpacing: '2px',
    animation: 'buttonPulse 2s ease-in-out infinite',
  },
  bannerCTA: {
    marginTop: '2rem',
  },
  
  statsSection: {
    padding: '3rem 2rem',
    background: '#f8fafc',
  },
  statsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  statCard: {
    textAlign: 'center',
    padding: '1.5rem',
  },
  statNumber: {
    fontSize: '3.5rem',
    fontWeight: 700,
    color: '#1e3a8a',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#64748b',
    fontWeight: 500,
  },
  eventBanner: {
    background: 'linear-gradient(90deg, #ea580c 0%, #f97316 50%, #ea580c 100%)',
    padding: '1.5rem 2rem',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(234, 88, 12, 0.5)',
  },
  eventTitle: {
    color: 'white',
    fontSize: '2rem',
    fontWeight: 700,
    margin: 0,
  },
  eventDetails: {
    color: 'white',
    fontSize: '1.2rem',
    margin: '0.5rem 0 0 0',
  },
  servicesSection: {
    padding: '4rem 2rem',
    background: 'white',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#1e293b',
  },
  sectionSubtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#64748b',
    marginBottom: '3rem',
  },
  servicesGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  serviceCard: {
    background: 'white',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s',
  },
  serviceIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#1e3a8a',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: 1.6,
  },
  aboutSection: {
    padding: '4rem 2rem',
    background: '#f8fafc',
  },
  aboutContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  aboutText: {},
  aboutTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#1e3a8a',
  },
  aboutParagraph: {
    fontSize: '1.1rem',
    color: '#64748b',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  aboutImage: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  },
  testimonialsSection: {
    padding: '4rem 2rem',
    background: 'white',
  },
  testimonialsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  testimonialCard: {
    background: '#f8fafc',
    padding: '2rem',
    borderRadius: '12px',
    borderLeft: '4px solid #ea580c',
  },
  testimonialText: {
    fontSize: '1.1rem',
    color: '#334155',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontWeight: 600,
    color: '#1e3a8a',
    fontSize: '1rem',
  },
  testimonialRole: {
    color: '#64748b',
    fontSize: '0.9rem',
  },
  contactSection: {
    padding: '4rem 2rem',
    background: '#1e3a8a',
    color: 'white',
    textAlign: 'center',
  },
  contactForm: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    textAlign: 'left',
  },
  formLabel: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 500,
    color: 'white',
  },
  formInput: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '2px solid #cbd5e1',
    fontSize: '1rem',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  formTextarea: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '2px solid #cbd5e1',
    fontSize: '1rem',
    fontFamily: 'inherit',
    minHeight: '150px',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  submitButton: {
    background: '#ea580c',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  footer: {
    background: '#0f172a',
    color: 'white',
    padding: '3rem 2rem 1rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  footerSection: {},
  footerTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#ea580c',
  },
  footerText: {
    color: '#cbd5e1',
    lineHeight: 1.8,
    fontSize: '0.95rem',
    margin: '0.25rem 0',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  socialIcon: {
    fontSize: '1.5rem',
    color: '#cbd5e1',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  footerBottom: {
    textAlign: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid #334155',
    color: '#94a3b8',
    fontSize: '0.9rem',
  },
};