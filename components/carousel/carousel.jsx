'use client'
import { useState, useEffect } from 'react'
import styles from './carousel.module.css'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      title: "CoreLift™",
      subtitle: "Pelvic Health Treatments Without Surgery",
      description: "Transform your body with our revolutionary CoreLift™ treatment.\nNo surgery, no downtime.",
      image: "/images/corelift.png",
      gradient: "linear-gradient(135deg, #1e40af 0%, #ea580c 100%)",
      badge: "Most Popular"
    },
    {
      title: "Independent Medical Evaluations",
      subtitle: "Professional IME Services",
      description: "Comprehensive independent medical evaluations for workers' compensation and disability cases.",
      image: "/images/ime.jpg",
      gradient: "linear-gradient(135deg, #2563eb 0%, #f97316 100%)"
    },
    {
      title: "Weight Management",
      subtitle: "Achieve Your Health Goals",
      description: "Personalized weight management programs with medical supervision and support.",
      image: "/images/weight-management.jpg",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #fb923c 100%)"
    },
    {
      title: "DOT Physical Exams",
      subtitle: "Certified Medical Examiner",
      description: "Get your DOT physical from a certified medical examiner. Quick, professional service.",
      image: "/images/dot-exams.jpg",
      gradient: "linear-gradient(135deg, #60a5fa 0%, #fdba74 100%)"
    },
    {
      title: "Mental Health Counseling",
      subtitle: "Compassionate Care",
      description: "Professional counseling services in a supportive, faith-based environment.",
      image: "/images/counseling.jpg",
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #c2410c 100%)"
    },
    {
      title: "Flexible Payment Options",
      subtitle: "CareCredit Available",
      description: "We accept CareCredit for affordable payment plans on your healthcare needs.",
      image: "/images/payment.jpg",
      gradient: "linear-gradient(135deg, #1e40af 0%, #fb923c 100%)"
    },
    {
      title: "Workplace Wellness",
      subtitle: "Corporate Health Programs",
      description: "Comprehensive workplace wellness programs to keep your team healthy and productive.",
      image: "/images/workplace.jpg",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #ea580c 100%)"
    },
    {
      title: "Fall Into Confidence Event",
      subtitle: "Special Event - Limited Time!",
      description: "Join us for our exclusive Fall Into Confidence event. Special pricing on select treatments!",
      image: "/images/event.png",
      gradient: "linear-gradient(135deg, #2563eb 0%, #f97316 100%)",
      badge: "Limited Time"
    },
    {
      title: "Meet Dr. Tess",
      subtitle: "Your Healthcare Partner",
      description: "Get to know Dr. Tess and discover compassionate, personalized healthcare.",
      image: "/images/dr-tess.png",
      gradient: "linear-gradient(135deg, #60a5fa 0%, #fdba74 100%)",
      badge: "Our Team",
      textPosition: "top"
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
            className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''} ${slide.textPosition === 'top' ? styles.topAligned : ''}`}
            style={{ 
              background: slide.image 
                ? (slide.title === "Meet Dr. Tess" 
                    ? `linear-gradient(rgba(30, 64, 175, 0.5), rgba(234, 88, 12, 0.5)), url(${slide.image}) center bottom/contain no-repeat`
                    : `linear-gradient(rgba(30, 64, 175, 0.5), rgba(234, 88, 12, 0.5)), url(${slide.image}) center/cover`)
                : slide.gradient 
            }}
          >
            <div className={styles.slideContent}>
              {slide.badge && (
                <div className={styles.featuredBadge}>
                  ⭐ {slide.badge}
                </div>
              )}
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
              <p className={styles.slideDescription} style={{ whiteSpace: 'pre-line' }}>{slide.description}</p>
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