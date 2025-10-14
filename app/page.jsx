'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import mobileStyles from './mobile.module.css';

// Floating dots configuration
const generateFloatingDots = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    floatDuration: `${15 + Math.random() * 15}s`,
    floatDelay: `${Math.random() * 5}s`,
    orbitDuration: `${20 + Math.random() * 20}s`,
    orbitRadius: `${50 + Math.random() * 100}px`,
    orbitDirection: Math.random() > 0.5 ? 1 : -1,
    pulseDuration: `${3 + Math.random() * 2}s`,
    pulseDelay: `${Math.random() * 3}s`,
    pulseIntensity: 0.5 + Math.random() * 0.5,
  }));
};

export default function LandingPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [floatingDots, setFloatingDots] = useState([]);

  // Generate floating dots on client only to avoid hydration mismatch
  useEffect(() => {
    setFloatingDots(generateFloatingDots());
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
      styles.minHScreen,
      mobileStyles.minHScreen
    )}>
      {/* Hero Background Elements */}
      <div className={styles.heroBackground}>
        <div className={styles.gradientOverlay} />
        <div className={styles.meshPattern} />
        <div className={styles.floatingElements}>
          {floatingDots.map((dot) => (
            <div
              key={dot.id}
              className={styles.floatingDot}
              style={{
                left: dot.left,
                top: dot.top,
                '--float-duration': dot.floatDuration,
                '--float-delay': dot.floatDelay,
                '--orbit-duration': dot.orbitDuration,
                '--orbit-radius': dot.orbitRadius,
                '--orbit-direction': dot.orbitDirection,
                '--pulse-duration': dot.pulseDuration,
                '--pulse-delay': dot.pulseDelay,
                '--pulse-intensity': dot.pulseIntensity,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Header with Logo */}
      <header className={styles.landingHeader}>
        <div className={styles.landingLogoContainer}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/images/logo.png" 
              alt="Garcia Family Medicine Logo" 
              width={160} 
              height={160}
              priority
              className={styles.flyingLogo}
            />
          </div>
        </div>
      </header>

      {/* MAIN BODY */}
      <main className={combineStyles(
        styles.main,
        mobileStyles.main
      )}>
        {/* Welcome card */}
        <section className={combineStyles(
          styles.mainWelcomeCard,
          mobileStyles.mainWelcomeCard
        )}>
          <h1 className={combineStyles(
            styles.mainWelcomeH1,
            mobileStyles.mainWelcomeH1
          )}>
            Welcome to <span className={styles.titleGradient}>Garcia Family Medicine</span>
          </h1>
          
          <h2 className={combineStyles(
            styles.mainWelcomeH2,
            mobileStyles.mainWelcomeH2
          )}>
            Compassionate Healthcare Overflowing with Love in Blue Springs, MO!
          </h2>

          <p className={combineStyles(
            styles.mainWelcomeP,
            mobileStyles.mainWelcomeP
          )}>
            Step into a healthcare experience rooted in trust, integrity, and the boundless love of God! At&nbsp;
            <strong className={styles.mainWelcomeStrong}>Garcia Family Medicine</strong>, we're passionately committed to making healthcare in Blue Springs, MO,&nbsp;
            <strong className={styles.mainWelcomeStrong}>simple, affordable, and deeply personalâ€”</strong>because you're more than a patient, you're family.
            We've stepped away from the traditional insurance system to deliver&nbsp;
            <strong className={styles.mainWelcomeStrong}>highâ€‘quality primary care</strong> and mentalâ€‘health support that's costâ€‘effective, compassionate,
            and free of long waits or hidden fees. Serving Blue Springs, Independence, Lee's Summit, and the greater
            Kansas City metro area, we're here to wrap you in care that reflects God's grace and goodness.
          </p>

          <button
            id="readMoreButton"
            className={combineStyles(
              styles.readMoreButton,
              mobileStyles.readMoreButton
            )}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="moreContent"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>

          <div
            id="moreContent"
            className={combineStyles(
              styles.careSection,
              mobileStyles.careSection,
              isExpanded ? styles.expanded : ''
            )}
          >
            <h3 className={combineStyles(
              styles.careSectionH3,
              mobileStyles.careSectionH3
            )}>
              <span className={styles.titleGradient}>Garcia Family Medicine:</span> Where Love Meets Exceptional Care!
            </h3>
            <p className={combineStyles(
              styles.careSectionP,
              mobileStyles.careSectionP
            )}>
              At <strong>Garcia Family Medicine</strong>, we're differentâ€”and that difference shines with purpose.
              Guided by faith and a heart for healing, we prioritize your mental and physical wellâ€‘being above all else.
              By leaving behind the complexities of insurance, we offer:
            </p>
            <ul className={combineStyles(
              styles.careSectionUl,
              mobileStyles.careSectionUl
            )}>
              <li className={combineStyles(
                styles.careSectionLi,
                mobileStyles.careSectionLi
              )}>
                <strong>Loving Care:</strong> From preventive checkups to managing chronic conditions like diabetes or hypertension, plus mental health support filled with empathy.
              </li>
              <li className={combineStyles(
                styles.careSectionLi,
                mobileStyles.careSectionLi
              )}>
                <strong>Heavenly Convenience:</strong> Quick, easy appointments that honor your time and needs.
              </li>
              <li className={combineStyles(
                styles.careSectionLi,
                mobileStyles.careSectionLi
              )}>
                <strong>Affordable Blessings:</strong> Transparent pricing with <a href="/services/cash-pay" className={styles.textLink}>cash pay options</a> and <a href="/services/payment-plans" className={styles.textLink}>flexible payment plans</a> that bring peace to your wallet and soul.
              </li>
            </ul>
            <p className={combineStyles(
              styles.careSectionP,
              mobileStyles.careSectionP
            )}>
              Located in Blue Springs, MO, we extend our warm, trustworthy embrace to Independence, Lee's Summit, and the entire Kansas City metro area. With integrity at our core, we're here to provide family medicine that feels like a hug from aboveâ€”because your health is a sacred gift, and we cherish it!
            </p>
            <h3 className={combineStyles(
              styles.careSectionH3,
              mobileStyles.careSectionH3
            )}>
              <span className={styles.titleGradient}>Trust in Us</span> â€“ Call Today!
            </h3>
            <p className={combineStyles(
              styles.careSectionP,
              mobileStyles.careSectionP
            )}>
              Ready to experience healthcare infused with compassion and the love of God? At Garcia Family Medicine, we're more than a practiceâ€”we're a ministry of wellness, serving Blue Springs, MO, and beyond with unwavering dedication. Whether you need a routine visit, ongoing care, or a kind ear for your mental health journey, our team is here to lift you up with trust and tenderness.
            </p>
            <p className={combineStyles(
              styles.careSectionP,
              mobileStyles.careSectionP
            )}>
              Pick up the phone and call&nbsp;
              <a href="tel:816-427-5320" className={styles.textLink}>816â€‘427â€‘5320</a>&nbsp;nowâ€”let us welcome you into our family! Join the countless patients in Blue Springs, Independence, Lee's Summit, and the Kansas City metro area who've found healing and hope with us. Dial&nbsp;
              <a href="tel:816-427-5320" className={styles.textLink}>816â€‘427â€‘5320</a>&nbsp;today and discover the joy of <strong>compassionate, faithâ€‘filled healthcare</strong> that's as reliable as it is remarkable. Your wellâ€‘being is our callingâ€”let's start this journey together!
            </p>
            <a
              href="tel:816-427-5320"
              className={combineStyles(
                styles.callButton,
                mobileStyles.callButton
              )}
            >
              Call Now: 816â€‘427â€‘5320
            </a>
          </div>
        </section>

        {/* Ask-Dr-Tess */}
        <section className={combineStyles(
          styles.commentsSection,
          mobileStyles.commentsSection
        )}>
          <h3 className={combineStyles(
            styles.commentsSectionH3,
            mobileStyles.commentsSectionH3
          )}>
            Got burning questions too tricky, awkward, or unknown to voice?
          </h3>
          <p className={combineStyles(
            styles.commentsSectionP,
            mobileStyles.commentsSectionP
          )}>
            Dr. Tess is here for you! Submit your questions through our secure form for a judgmentâ€‘free response, or call&nbsp;
            <a href="tel:816-427-5320" className={styles.textLink}>816â€‘427â€‘5320</a>&nbsp;for a personal chat.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className={combineStyles(
              styles.askButton,
              mobileStyles.askButton
            )}
            aria-haspopup="dialog"
          >
            Ask Dr. Tess
          </button>
        </section>

        {/* Enter Main Site Button */}
        <section className={combineStyles(
          styles.commentsSection,
          mobileStyles.commentsSection
        )}>
          <h3 className={combineStyles(
            styles.commentsSectionH3,
            mobileStyles.commentsSectionH3
          )}>
            Ready to explore our full range of services?
          </h3>
          <Link
            href="/home"
            className={combineStyles(
              styles.callButton,
              mobileStyles.callButton,
              styles.inlineBlock
            )}
          >
            Enter Main Site
          </Link>
        </section>
      </main>

      {/* Popup */}
      {isPopupOpen && (
        <div
          id="popup"
          className={combineStyles(
            styles.popup,
            mobileStyles.popup,
            'opacity-100'
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
                      <div className={combineStyles(
              styles.popupContent,
              mobileStyles.popupContent
            )}>
              <button
                className={combineStyles(
                  styles.close,
                  mobileStyles.close
                )}
                onClick={() => setIsPopupOpen(false)}
                aria-label="Close dialog"
              >
                ×
              </button>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: '#4169E1', fontSize: '2rem', marginBottom: '1rem' }}>Ask Dr. Tess</h2>
                <p style={{ color: '#404041', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  Have questions? Reach out to us directly!
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                  <a 
                    href="mailto:admin@garciafamilymedicine.care" 
                    style={{ 
                      background: 'linear-gradient(135deg, #4169E1 0%, #2563EB 100%)', 
                      color: 'white', 
                      padding: '1rem 2rem', 
                      borderRadius: '50px', 
                      textDecoration: 'none', 
                      fontWeight: '600', 
                      fontSize: '1.1rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '0.5rem' 
                    }}
                  >
                    📧 Email Dr. Tess
                  </a>
                  <a 
                    href="tel:816-427-5320" 
                    style={{ 
                      background: 'linear-gradient(135deg, #F48120 0%, #EA580C 100%)', 
                      color: 'white', 
                      padding: '1rem 2rem', 
                      borderRadius: '50px', 
                      textDecoration: 'none', 
                      fontWeight: '600', 
                      fontSize: '1.1rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '0.5rem' 
                    }}
                  >
                    📞 Call: (816) 427-5320
                  </a>
                  <a 
                    href="sms:816-427-5320" 
                    style={{ 
                      background: 'linear-gradient(135deg, #FAAD3F 0%, #F48120 100%)', 
                      color: 'white', 
                      padding: '1rem 2rem', 
                      borderRadius: '50px', 
                      textDecoration: 'none', 
                      fontWeight: '600', 
                      fontSize: '1.1rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '0.5rem' 
                    }}
                  >
                    💬 Text: (816) 427-5320
                  </a>
                </div>
                <p style={{ color: '#404041', fontSize: '0.9rem', marginTop: '2rem' }}>
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>

        </div>
      )}
      
      {/* Copyright section */}
      <footer className={combineStyles(
        styles.copyright,
        mobileStyles.copyright
      )}>
        <p>&copy; {new Date().getFullYear()} Garcia Family Medicine. All rights reserved.</p>
      </footer>
    </div>
  );
}

