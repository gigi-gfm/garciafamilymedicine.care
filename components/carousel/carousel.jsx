'use client'
import { useState, useEffect } from 'react'
import styles from './carousel.module.css'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      title: "CoreLift™",
      subtitle: "Body Contouring Without Surgery",
      description: "Transform your body with our revolutionary CoreLift™ treatment. No surgery, no downtime.",
      icon: "💎",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      badge: "Most Popular"
    },
    {
      title: "Independent Medical Exams",
      subtitle: "Professional IME Services",
      description: "Comprehensive independent medical evaluations for workers' compensation and disability cases.",
      icon: "📋",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Weight Management",
      subtitle: "Achieve Your Health Goals",
      description: "Personalized weight management programs with medical supervision and support.",
      icon: "⚖️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "DOT Physical Exams",
      subtitle: "Certified Medical Examiner",
      description: "Get your DOT physical from a certified medical examiner. Quick, professional service.",
      icon: "🚛",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Mental Health Counseling",
      subtitle: "Compassionate Care",
      description: "Professional counseling services in a supportive, faith-based environment.",
      icon: "🧠",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Flexible Payment Options",
      subtitle: "CareCredit Available",
      description: "We accept CareCredit for affordable payment plans on your healthcare needs.",
      icon: "💳",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      title: "Workplace Wellness",
      subtitle: "Corporate Health Programs",
      description: "Comprehensive workplace wellness programs to keep your team healthy and productive.",
      icon: "🏢",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "Fall Into Confidence Event",
      subtitle: "Special Event - Limited Time!",
      description: "Join us for our exclusive Fall Into Confidence event. Special pricing on select treatments!",
      icon: "🍂",
      gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
      badge: "Limited Time"
    },
    {
      title: "Meet Dr. Tess",
      subtitle: "Your Healthcare Partner",
      description: "Get to know Dr. Tess and discover compassionate, personalized healthcare.",
      icon: "👩‍⚕️",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      badge: "Our Team"
    }
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
            style={{ background: slide.gradient }}
          >
            <div className={styles.slideContent}>
              {slide.badge && (
                <div className={styles.featuredBadge}>
                  ⭐ {slide.badge}
                </div>
              )}
              <div className={styles.slideIcon}>{slide.icon}</div>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
              <p className={styles.slideDescription}>{slide.description}</p>
              <button className={styles.learnMoreButton}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
        ‹
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
        ›
      </button>

      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentSlide(index)
                setTimeout(() => setIsAnimating(false), 600)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}