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
      colors: { from: '#4169E1', via: '#60A5FA', to:

$newCarousel = @'
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
      colors: { from: '#4169E1', via: '#60A5FA', to: '#FAAD3F' }
    },
    {
      id: 6,
      title: 'Payment Plans',
      subtitle: 'Flexible Payment Options',
      description: 'Multiple payment options including CareCredit, Cherry 0% financing, and custom payment plans.',
      link: '/services/payment-plans',
      icon: '',
      colors: { from: '#FAAD3F', via: '#FFB347', to: '#4169E1' }
    },
    {
      id: 7,
      title: 'Workplace Wellness',
      subtitle: 'Small Business Healthcare',
      description: 'Affordable DPC plans for businesses with 5+ employees. Comprehensive healthcare for your team.',
      link: '/services/workplace-wellness',
      icon: '',
      colors: { from: '#FAAD3F', via: '#60A5FA', to: '#2563EB' }
    },
    {
      id: 8,
      title: 'Fall Into Confidence + Veterans Appreciation',
      subtitle: 'Thursday, November 6th  3-7 PM',
      description: ' FREE Emsella Demos   Refreshments Available   Honoring Our Veterans  Special Veterans Pricing',
      link: '/contact',
      icon: '',
      colors: { from: '#F48120', via: '#4169E1', to: '#FAAD3F' },
      featured: true
    },
    {
      id: 9,
      title: 'Meet Dr. Tess Garcia',
      subtitle: 'Your Partner in Whole-Person Healthcare',
      description: 'Watch Dr. Tess explain pelvic health solutions and how we treat the whole patient: Spirit, Body, and Soul.',
      link: 'https://youtu.be/SAiFSAqIMSM',
      icon: '',
      colors: { from: '#4169E1', via: '#2563EB', to: '#F48120' },
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.carouselWrapper} suppressHydrationWarning>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
          style={{
            background: `linear-gradient(135deg, ${slide.colors.from} 0%, ${slide.colors.via} 50%, ${slide.colors.to} 100%)`
          }}
        >
          <div className={styles.slideContent}>
            {slide.featured && (
              <div className={styles.featuredBadge}>
                 FEATURED
              </div>
            )}
            
            <div className={styles.slideIcon}>{slide.icon}</div>
            <h2 className={styles.slideTitle}>{slide.title}</h2>
            <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
            <p className={styles.slideDescription}>{slide.description}</p>
            
            <Link href={slide.link} className={styles.learnMoreButton}>
              {slide.id === 8 ? 'RSVP NOW' : slide.id === 9 ? 'Watch Video' : 'Learn More'}
            </Link>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className={`${styles.navButton} ${styles.prevButton}`} aria-label="Previous slide">
        
      </button>
      <button onClick={nextSlide} className={`${styles.navButton} ${styles.nextButton}`} aria-label="Next slide">
        
      </button>

      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

