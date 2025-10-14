'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from '../page.module.css';
import mobileStyles from '../mobile.module.css';
import homeStyles from './home.module.css';

const DEFAULT_URL = 'https://garciafamilymedicine.care/contact';

const slides = [
  {
    src: '/images/homepage/homepage-banner-02.png',
    alt: 'Mental Health Support - Compassionate Counseling',
    href: '/services/peacewithin-life-coaching',
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-03.png',
    alt: 'Pelvic Health Treatment - CoreLift Program',
    href: '/services/corelift',
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-04.png',
    alt: 'Direct Primary Care Membership',
    href: '/services/myclinic365',
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-05.png',
    alt: 'Weight Management - Nourish & Thrive Journey',
    href: '/services/nourish-thrive-journey',
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-06.png',
    alt: 'Veteran Services - Caring for Those Who Served',
    href: 'https://garciafamilymedicine.care/veterans',
    target: '_blank'
  },
  {
    src: '/images/homepage/homepage-banner-07.png',
    alt: 'Healthcare Services - View All',
    href: '/services',
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-08.png',
    alt: 'Faith & Family Medicine',
    href: '/services/faith-family-medicine',
    target: '_self'
  }
];



export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  
  // Carousel states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle image loading
  const handleImageLoad = useCallback((index) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  }, []);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotation with pause control (faster on mobile for marquee effect)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, isMobile ? 8000 : 15000); // 8 seconds on mobile to match marquee animation
    
    return () => clearInterval(interval);
  }, [isPaused, slides.length, currentIndex, isMobile]);

  // Check if first image is loaded
  useEffect(() => {
    // Hide loading after first image loads OR after 3 seconds timeout
    if (loadedImages.has(0) || loadedImages.size > 0) {
      setIsLoading(false);
    }
    
    // Failsafe timeout to hide loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [loadedImages]);

  const goToSlide = useCallback((index) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, [currentIndex]);

  const prevSlide = useCallback(() => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  }, [currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Measure header height after component mounts and on resize
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        // Also set CSS custom property for use in other components
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    // Initial measurement with a small delay to ensure header is rendered
    const timeoutId = setTimeout(updateHeaderHeight, 100);

    // Re-measure on window resize
    const handleResize = () => {
      updateHeaderHeight();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close popup when clicking overlay
  useEffect(() => {
    const handleOverlayClick = (e) => { 
      if (e.target.id === 'popup') {
        setIsPopupOpen(false);
      }
    };
    
    if (isPopupOpen) {
      window.addEventListener('click', handleOverlayClick);
      return () => window.removeEventListener('click', handleOverlayClick);
    }
  }, [isPopupOpen]);

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        setIsPopupOpen(false);
      }
    };
    
    if (isPopupOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isPopupOpen]);

  // Combine styles function
  const combineStyles = (...classNames) => 
    classNames.filter(Boolean).join(' ');

  return (
    <div className={combineStyles(
      "min-h-screen bg-background text-foreground font-sans flex flex-col",
      styles.minHScreen,
      mobileStyles.minHScreen
    )}>
      {/* Header */}
      <Header />

      {/* Hero carousel section */}
      <section 
        id="carousel-section"
        className={homeStyles.carouselSection}
        aria-label="Garcia Family Medicine Services Carousel"
        role="region"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Loading indicator */}
        {isLoading && (
          <div className={homeStyles.carouselLoading}>
            <div className="carousel-loading-spinner"></div>
            <p>Loading images...</p>
          </div>
        )}

        <div className={homeStyles.carouselContainer}>
          {isMobile ? (
            /* Mobile: continuous marquee with duplicated slides */
            <div className={homeStyles.carouselTrack}>
              {/* First set of slides */}
              {slides.map((slide, index) => (
                <div
                  key={`slide-${index}`}
                  className={homeStyles.carouselSlide}
                >
                  <a
                    href={slide.href}
                    target={slide.target}
                    rel={slide.target === '_blank' ? 'noopener noreferrer' : undefined}
                    aria-label={slide.alt}
                  >
                    <div className={homeStyles.carouselImageWrapper}>
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className={homeStyles.carouselImage}
                        loading="lazy"
                        onLoad={() => handleImageLoad(index)}
                      />
                    </div>
                  </a>
                </div>
              ))}
              {/* Duplicate slides for seamless loop */}
              {slides.map((slide, index) => (
                <div
                  key={`slide-dup-${index}`}
                  className={homeStyles.carouselSlide}
                >
                  <a
                    href={slide.href}
                    target={slide.target}
                    rel={slide.target === '_blank' ? 'noopener noreferrer' : undefined}
                    aria-label={slide.alt}
                  >
                    <div className={homeStyles.carouselImageWrapper}>
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className={homeStyles.carouselImage}
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop: single slide at a time */
            slides.map((slide, index) => (
              <div
                key={`slide-${index}`}
                className={`${homeStyles.carouselSlide} ${
                  index === currentIndex ? homeStyles.active : ''
                } ${
                  index === previousIndex ? homeStyles.prev : ''
                } ${
                  index === (currentIndex + 1) % slides.length ? homeStyles.next : ''
                }`}
                aria-hidden={index !== currentIndex}
              >
                <a
                  href={slide.href}
                  target={slide.target}
                  rel={slide.target === '_blank' ? 'noopener noreferrer' : undefined}
                  aria-label={slide.alt}
                >
                  <div className={homeStyles.carouselImageWrapper}>
                    <picture>
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className={homeStyles.carouselImage}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        onLoad={() => handleImageLoad(index)}
                        onError={(e) => {
                          console.error('Image failed to load:', slide.src);
                          handleImageLoad(index);
                        }}
                      />
                    </picture>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>

        {/* Navigation Arrows - hide on mobile for cleaner marquee look */}
        {!isMobile && (
        <button 
          className={`${homeStyles.carouselNavButton} ${homeStyles.carouselPrevButton}`}
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isLoading}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        )}
        
        {!isMobile && (
        <button 
          className={`${homeStyles.carouselNavButton} ${homeStyles.carouselNextButton}`}
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isLoading}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        )}

        {/* Dots Navigation at Top - smaller on mobile */}
        <div className={`${homeStyles.carouselDots} ${isMobile ? homeStyles.mobileDots : ''}`}>
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`${homeStyles.carouselDot} ${
                index === currentIndex ? homeStyles.active : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
              disabled={isLoading}
            />
          ))}
        </div>

        {/* Slide counter for accessibility */}
        <div className="carousel-slide-counter" aria-live="polite">
          <span className="sr-only">
            Slide {currentIndex + 1} of {slides.length}
          </span>
        </div>
      </section>

      <div className={homeStyles.mainContent}>
        <Footer />
      </div>
    </div>
  );
}


