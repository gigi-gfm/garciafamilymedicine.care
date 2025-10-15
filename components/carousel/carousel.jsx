'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './carousel.module.css';

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'CoreLift Confidence',
      subtitle: 'Emsella Pelvic Floor Therapy',
      description: 'FDA-cleared breakthrough treatment for bladder control and pelvic health. Non-surgical, no downtime.',
      link: '/services/corelift',
      colors: { from: '#F48120', to: '#FAAD3F' },
      featured: true
    },
    {
      id: 2,
      title: 'Independent Medical Examinations',
      subtitle: 'Professional IME Services',
      description: 'Comprehensive independent medical evaluations for workers compensation, disability claims, and legal cases.',
      link: '/services/valorview-ime',
      colors: { from: '#4169E1', to: '#2563EB' },
      featured: true
    },
    {
      id: 3,
      title: 'Nourish & Thrive Journey',
      subtitle: 'Medical Weight Management',
      description: 'Personalized weight loss program with GLP-1 medications, nutrition counseling, and lifestyle support.',
      link: '/services/nourish-thrive-journey',
      colors: { from: '#FAAD3F', to: '#F48120' },
      featured: true
    },
    {
      id: 4,
      title: 'ClearRoad DOT Exams',
      subtitle: 'DOT Physical Certifications',
      description: 'Fast, certified DOT physicals for commercial drivers. Keep your CDL active and stay on the road.',
      link: '/services/clearroad-dot-exams',
      colors: { from: '#2563EB', to: '#4169E1' }
    },
    {
      id: 5,
      title: 'Counseling Services',
      subtitle: 'Mental Health Support',
      description: 'Professional counseling for anxiety, depression, life transitions, and personal growth.',
      link: '/services/counseling',
      colors: { from: '#F48120', to: '#EA580C' }
    },
    {
      id: 6,
      title: 'Flexible Payment Options',
      subtitle: 'Healthcare Financing',
      description: 'Multiple payment options including CareCredit and flexible financing to fit your budget.',
      link: '/services/payment-plans',
      colors: { from: '#4169E1', to: '#F48120' }
    },
    {
      id: 7,
      title: 'Workplace Wellness',
      subtitle: 'Small Business Healthcare',
      description: 'Affordable DPC plans for businesses with 5+ employees. Comprehensive healthcare for your team.',
      link: '/services/workplace-wellness',
      colors: { from: '#FAAD3F', to: '#2563EB' }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div 
          className={styles.slidesTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <Link 
              href={slide.link} 
              key={slide.id}
              className={`${styles.slide} ${slide.featured ? styles.featuredSlide : ''}`}
              style={{ 
                background: `linear-gradient(135deg, ${slide.colors.from} 0%, ${slide.colors.to} 100%)`
              }}
            >
              <div className={styles.slideContent}>
                {slide.featured && (
                  <div className={styles.featuredBadge}>⭐ TOP SERVICE</div>
                )}
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
                <p className={styles.slideDescription}>{slide.description}</p>
                <span className={styles.learnMoreButton}>
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
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
