import React, { useState, useEffect } from 'react';
import { Heart, Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight, Star, Calendar } from 'lucide-react';

export default function GarciaFamilyMedicine() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'event',
      title: 'Fall Into Confidence',
      subtitle: 'Veterans Appreciation Event • November 6th',
      description: 'Join us 3-7 PM for CoreLift with Emsella demonstrations, refreshments, and special pricing. RSVP required.',
      cta: 'RSVP Now',
      image: '/images/event.png',
      featured: true
    },
    {
      id: 'corelift',
      title: 'CoreLift™ Pelvic Health',
      subtitle: 'with Emsella Technology',
      description: 'Revolutionary non-invasive treatment for bladder control and intimate wellness',
      cta: 'Learn More',
      image: '/images/corelift.png'
    },
    {
      id: 'ime',
      title: 'Independent Medical Evaluations',
      subtitle: 'Professional & Comprehensive',
      description: 'Expert medical evaluations for legal and insurance cases',
      cta: 'Schedule Evaluation',
      image: '/images/ime.jpg'
    },
    {
      id: 'weight',
      title: 'Medical Weight Management',
      subtitle: 'Personalized Programs',
      description: 'Science-based weight loss tailored to your unique needs',
      cta: 'Start Your Journey',
      image: '/images/weight-management.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, currentSlide === 0 ? 10000 : 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Thank you for reaching out! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div style={styles.container}>
      {/* Fixed Logo */}
      <div style={styles.logoContainer}>
        <img 
          src="/images/garcia-logo.png" 
          alt="Garcia Family Medicine" 
          style={styles.logo}
        />
      </div>

      {/* Hero Carousel */}
      <div style={styles.heroCarousel}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              ...styles.heroSlide,
              opacity: currentSlide === index ? 1 : 0,
              pointerEvents: currentSlide === index ? 'auto' : 'none'
            }}
          >
            <div style={{
              ...styles.heroOverlay,
              background: slide.featured 
                ? 'linear-gradient(135deg, rgba(234, 88, 12, 0.9) 0%, rgba(220, 38, 38, 0.85) 100%)'
                : 'linear-gradient(135deg, rgba(30, 58, 138, 0.85) 0%, rgba(234, 88, 12, 0.75) 100%)'
            }} />
            <img 
              src={slide.image} 
              alt={slide.title}
              style={styles.heroImage}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div style={styles.heroContent}>
              {slide.featured && (
                <div style={styles.featuredBadge}>
                  <Calendar size={20} style={{marginRight: '8px'}} />
                  EXCLUSIVE EVENT
                </div>
              )}
              <h1 style={styles.heroTitle}>{slide.title}</h1>
              <p style={styles.heroSubtitle}>{slide.subtitle}</p>
              <p style={styles.heroDescription}>{slide.description}</p>
              <button style={styles.heroButton}>{slide.cta}</button>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button style={{...styles.carouselButton, ...styles.carouselButtonLeft}} onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
        <button style={{...styles.carouselButton, ...styles.carouselButtonRight}} onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>

        {/* Navigation Dots */}
        <div style={styles.carouselDots}>
          {slides.map((slide, index) => (
            <button
              key={index}
              style={{
                ...styles.dot,
                background: currentSlide === index ? '#ea580c' : 'rgba(255, 255, 255, 0.5)',
                width: slide.featured && currentSlide === index ? '40px' : '12px',
                borderRadius: slide.featured && currentSlide === index ? '6px' : '50%'
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>25+</div>
            <div style={styles.statLabel}>Years Experience</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>10,000+</div>
            <div style={styles.statLabel}>Patients Served</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>98%</div>
            <div style={styles.statLabel}>Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Top 3 Services Section */}
      <div style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Our Featured Services</h2>
        <p style={styles.sectionSubtitle}>Specialized care tailored to your unique needs</p>
        
        <div style={styles.servicesGrid}>
          {[
            {
              title: 'CoreLift™ Pelvic Health',
              subtitle: 'with Emsella Technology',
              image: '/images/services/corelift-hero.jpg',
              description: 'Revolutionary FDA-cleared treatment for bladder control and intimate wellness. Non-invasive, comfortable, and highly effective.',
              benefits: ['Non-invasive', 'No downtime', 'FDA cleared', '95% success rate']
            },
            {
              title: 'Independent Medical Evaluations',
              subtitle: 'Professional & Comprehensive',
              image: '/images/services/ime-hero.jpg',
              description: 'Expert medical evaluations for legal and insurance cases. Thorough, objective assessments you can trust.',
              benefits: ['Expert analysis', 'Detailed reports', 'Legal support', 'Fast turnaround']
            },
            {
              title: 'Medical Weight Management',
              subtitle: 'Personalized Programs',
              image: '/images/services/weight-hero.jpg',
              description: 'Science-based weight loss programs tailored to your metabolism, lifestyle, and health goals.',
              benefits: ['Custom plans', 'Medical supervision', 'Proven results', 'Ongoing support']
            }
          ].map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <div style={styles.serviceImageContainer}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  style={styles.serviceImage}
                  onError={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #ea580c 100%)';
                    e.target.style.display = 'block';
                  }}
                />
                <div style={styles.serviceOverlay} />
              </div>
              <div style={styles.serviceContent}>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceSubtitle}>{service.subtitle}</p>
                <p style={styles.serviceDescription}>{service.description}</p>
                <div style={styles.benefitsList}>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} style={styles.benefitItem}>
                      <div style={styles.checkmark}>✓</div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <button style={styles.serviceButton}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Patients Say</h2>
        <div style={styles.testimonialsGrid}>
          {[
            {
              text: "Dr. Tess truly cares about her patients. She takes the time to listen and provides excellent care.",
              author: "Sarah M.",
              rating: 5
            },
            {
              text: "The CoreLift treatment has been life-changing. I'm so grateful for this practice!",
              author: "Jennifer K.",
              rating: 5
            },
            {
              text: "Professional, compassionate, and thorough. Best family medicine practice in Blue Springs!",
              author: "Michael R.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#ea580c" color="#ea580c" />
                ))}
              </div>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <p style={styles.testimonialAuthor}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Get In Touch</h2>
        <p style={styles.contactSubtitle}>Ready to start your journey to better health?</p>
        
        <div style={styles.contactGrid}>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <Phone size={24} color="#ea580c" />
              <div>
                <div style={styles.contactLabel}>Phone</div>
                <div style={styles.contactValue}>(816) 229-5900</div>
              </div>
            </div>
            <div style={styles.contactItem}>
              <Mail size={24} color="#ea580c" />
              <div>
                <div style={styles.contactLabel}>Email</div>
                <div style={styles.contactValue}>info@garciafamilymedicine.care</div>
              </div>
            </div>
            <div style={styles.contactItem}>
              <MapPin size={24} color="#ea580c" />
              <div>
                <div style={styles.contactLabel}>Location</div>
                <div style={styles.contactValue}>Blue Springs, MO</div>
              </div>
            </div>
            <div style={styles.contactItem}>
              <Clock size={24} color="#ea580c" />
              <div>
                <div style={styles.contactLabel}>Hours</div>
                <div style={styles.contactValue}>Mon-Fri: 8AM-5PM</div>
              </div>
            </div>
          </div>

          <div style={styles.contactForm}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.formTextarea}
                rows="4"
              />
            </div>
            <button onClick={handleSubmit} style={styles.submitButton}>
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerContent}>
          <div>
            <div style={styles.footerLogo}>
              <Heart size={32} color="#ea580c" />
              <span style={styles.footerLogoText}>Garcia Family Medicine</span>
            </div>
            <p style={styles.footerTagline}>Treating the whole patient: Spirit, Body, and Soul</p>
          </div>
          <div style={styles.footerCopyright}>
            © 2019-{new Date().getFullYear()} Garcia Family Medicine. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    minHeight: '100vh',
    background: 'white',
  },
  
  logoContainer: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 1000,
    background: 'white',
    padding: '10px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    display: 'block',
    width: '60px',
    height: '60px',
    borderRadius: '8px',
  },
  
  heroCarousel: {
    position: 'relative',
    height: '600px',
    overflow: 'hidden',
  },
  heroSlide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  heroContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 2,
    maxWidth: '800px',
    padding: '0 2rem',
  },
  featuredBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#dc2626',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    animation: 'pulse 2s infinite',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  heroSubtitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    fontWeight: 500,
  },
  heroDescription: {
    fontSize: '1.3rem',
    marginBottom: '2rem',
    lineHeight: 1.6,
    opacity: 0.95,
  },
  heroButton: {
    background: '#ea580c',
    color: 'white',
    padding: '1.2rem 3rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 20px rgba(234, 88, 12, 0.4)',
  },
  
  carouselButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 3,
    transition: 'all 0.3s',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
  carouselButtonLeft: {
    left: '20px',
  },
  carouselButtonRight: {
    right: '20px',
  },
  carouselDots: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 3,
  },
  dot: {
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  
  statsSection: {
    padding: '4rem 2rem',
    background: '#f8fafc',
  },
  statsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
  },
  statCard: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '4rem',
    fontWeight: 700,
    color: '#1e3a8a',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '1.2rem',
    color: '#64748b',
    fontWeight: 500,
  },
  
  servicesSection: {
    padding: '5rem 2rem',
    background: 'white',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#1e3a8a',
  },
  sectionSubtitle: {
    fontSize: '1.3rem',
    textAlign: 'center',
    marginBottom: '4rem',
    color: '#64748b',
  },
  servicesGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '3rem',
  },
  serviceCard: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  serviceImageContainer: {
    position: 'relative',
    height: '250px',
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  serviceOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
  },
  serviceContent: {
    padding: '2rem',
  },
  serviceTitle: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#1e3a8a',
    marginBottom: '0.5rem',
  },
  serviceSubtitle: {
    fontSize: '1.1rem',
    color: '#ea580c',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
  },
  benefitsList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: '#475569',
  },
  checkmark: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #ea580c 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    flexShrink: 0,
  },
  serviceButton: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #ea580c 100%)',
    color: 'white',
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.3s',
    boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)',
  },
  
  testimonialsSection: {
    padding: '5rem 2rem',
    background: '#f8fafc',
  },
  testimonialsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  testimonialCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  stars: {
    display: 'flex',
    gap: '4px',
    marginBottom: '1rem',
  },
  testimonialText: {
    fontSize: '1.1rem',
    color: '#334155',
    lineHeight: 1.7,
    marginBottom: '1rem',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontSize: '1rem',
    color: '#64748b',
    fontWeight: 600,
  },
  
  contactSection: {
    padding: '5rem 2rem',
    background: '#1e3a8a',
    color: 'white',
  },
  contactTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1rem',
  },
  contactSubtitle: {
    fontSize: '1.3rem',
    textAlign: 'center',
    marginBottom: '4rem',
    opacity: 0.9,
  },
  contactGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '4rem',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  contactLabel: {
    fontSize: '0.9rem',
    opacity: 0.8,
    marginBottom: '0.3rem',
  },
  contactValue: {
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  formLabel: {
    marginBottom: '0.5rem',
    fontWeight: 500,
  },
  formInput: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
  },
  formTextarea: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  submitButton: {
    background: '#ea580c',
    color: 'white',
    padding: '1.2rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 20px rgba(234, 88, 12, 0.4)',
  },
  
  footer: {
    background: '#0f172a',
    color: 'white',
    padding: '3rem 2rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '0.5rem',
  },
  footerLogoText: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  footerTagline: {
    color: '#94a3b8',
    fontSize: '0.95rem',
    fontStyle: 'italic',
  },
  footerCopyright: {
    color: '#94a3b8',
    fontSize: '0.9rem',
  },
};