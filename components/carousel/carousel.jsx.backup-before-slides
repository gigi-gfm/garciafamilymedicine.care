'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './carousel.module.css';

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      id: 1,
      title: 'CoreLift Confidence',
      subtitle: 'Emsella Pelvic Floor Therapy',
      description: 'FDA-cleared breakthrough treatment for bladder control and pelvic health. Non-surgical, no downtime.',
      link: '/services/corelift',
      icon: '💪',
      colors: { from: '#F48120', via: '#FF6B35', to: '#FAAD3F' },
      featured: true
    },
    {
      id: 2,
      title: 'Independent Medical Examinations',
      subtitle: 'Professional IME Services',
      description: 'Comprehensive independent medical evaluations for workers compensation, disability claims, and legal cases.',
      link: '/services/valorview-ime',
      icon: '📋',
      colors: { from: '#4169E1', via: '#5B8DEE', to: '#2563EB' },
      featured: true
    },
    {
      id: 3,
      title: 'Nourish & Thrive Journey',
      subtitle: 'Medical Weight Management',
      description: 'Personalized weight loss program with GLP-1 medications, nutrition counseling, and lifestyle support.',
      link: '/services/nourish-thrive-journey',
      icon: '🌟',
      colors: { from: '#FAAD3F', via: '#FFB347', to: '#F48120' },
      featu

# Create AMAZING carousel with ALL the bells and whistles!
$amazingCarousel = @'
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './carousel.module.css';

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      id: 1,
      title: 'CoreLift Confidence',
      subtitle: 'Emsella Pelvic Floor Therapy',
      description: 'FDA-cleared breakthrough treatment for bladder control and pelvic health. Non-surgical, no downtime.',
      link: '/services/corelift',
      icon: '',
      colors: { from: '#F48120', via: '#FF6B35', to: '#FAAD3F' },
      featured: true
    },
    {
      id: 2,
      title: 'Independent Medical Examinations',
      subtitle: 'Professional IME Services',
      description: 'Comprehensive independent medical evaluations for workers compensation, disability claims, and legal cases.',
      link: '/services/valorview-ime',
      icon: '',
      colors: { from: '#4169E1', via: '#5B8DEE', to: '#2563EB' },
      featured: true
    },
    {
      id: 3,
      title: 'Nourish & Thrive Journey',
      subtitle: 'Medical Weight Management',
      description: 'Personalized weight loss program with GLP-1 medications, nutrition counseling, and lifestyle support.',
      link: '/services/nourish-thrive-journey',
      icon: '',
      colors: { from: '#FAAD3F', via: '#FFB347', to: '#F48120' },
      featured: true
    },
    {
      id: 4,
      title: 'ClearRoad DOT Exams',
      subtitle: 'DOT Physical Certifications',
      description: 'Fast, certified DOT physicals for commercial drivers. Keep your CDL active and stay on the road.',
      link: '/services/clearroad-dot-exams',
      icon: '',
      colors: { from: '#2563EB', via: '#3B82F6', to: '#4169E1' }
    },
    {
      id: 5,
      title: 'Counseling Services',
      subtitle: 'Mental Health Support',
      description: 'Professional counseling for anxiety, depression, life transitions, and personal growth.',
      link: '/services/counseling',
      icon: '',
      colors: { from: '#F48120', via: '#F97316', to: '#EA580C' }
    },
    {
      id: 6,
      title: 'Flexible Payment Options',
      subtitle: 'Healthcare Financing',
      description: 'Multiple payment options including CareCredit and flexible financing to fit your budget.',
      link: '/services/payment-plans',
      icon: '',
      colors: { from: '#4169E1', via: '#8B5CF6', to: '#F48120' }
    },
    {
      id: 7,
      title: 'Workplace Wellness',
      subtitle: 'Small Business Healthcare',
      description: 'Affordable DPC plans for businesses with 5+ employees. Comprehensive healthcare for your team.',
      link: '/services/workplace-wellness',
      icon: '',
      colors: { from: '#FAAD3F', via: '#60A5FA', to: '#2563EB' }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper} onMouseMove={handleMouseMove}>
        {/* Animated Background */}
        <div className={styles.animatedBg}>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
        </div>

        {/* Floating Particles */}
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div 
          className={styles.slidesTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <Link 
              href={slide.link} 
              key={slide.id}
              className={`${styles.slide} ${slide.featured ? styles.featuredSlide : ''} ${index === currentSlide ? styles.activeSlide : ''}`}
              style={{ 
                background: `linear-gradient(135deg, ${slide.colors.from} 0%, ${slide.colors.via} 50%, ${slide.colors.to} 100%)`,
                transform: index === currentSlide ? `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)` : 'none'
              }}
            >
              {/* Glowing orbs */}
              <div className={styles.orb} style={{ left: '10%', top: '20%' }}></div>
              <div className={styles.orb} style={{ right: '15%', bottom: '25%' }}></div>

              <div className={styles.slideContent}>
                {slide.featured && (
                  <div className={styles.featuredBadge}>
                    <span className={styles.badgeStar}></span> TOP SERVICE
                  </div>
                )}
                
                <div className={styles.iconWrapper}>
                  <span className={styles.slideIcon}>{slide.icon}</span>
                </div>

                <h2 className={styles.slideTitle}>
                  {slide.title}
                  <div className={styles.titleUnderline}></div>
                </h2>
                
                <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
                <p className={styles.slideDescription}>{slide.description}</p>
                
                <span className={styles.learnMoreButton}>
                  <span className={styles.buttonText}>Learn More</span>
                  <span className={styles.buttonArrow}></span>
                </span>
              </div>

              {/* Decorative corner accents */}
              <div className={styles.cornerAccent} style={{ top: 0, left: 0 }}></div>
              <div className={styles.cornerAccent} style={{ top: 0, right: 0, transform: 'rotate(90deg)' }}></div>
              <div className={styles.cornerAccent} style={{ bottom: 0, left: 0, transform: 'rotate(-90deg)' }}></div>
              <div className={styles.cornerAccent} style={{ bottom: 0, right: 0, transform: 'rotate(180deg)' }}></div>
            </Link>
          ))}
        </div>

        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span></span>
        </button>
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span></span>
        </button>

        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
