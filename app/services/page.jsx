'use client';

import styles from './services.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaHeart,
  FaUserMd,
  FaShieldAlt,
  FaStethoscope,
  FaCalendarCheck,
  FaHandsHelping,
  FaClock,
  FaPhone,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaClinicMedical
} from 'react-icons/fa';

const services = {
  featured: [
    {
      icon: FaStethoscope,
      title: "CoreLift™ Program",
      description: "Revolutionary pelvic floor strengthening and body contouring",
      link: "/services/corelift",
      color: "#F48120",
      features: ["Non-invasive treatment", "FDA-cleared technology", "Long-lasting results"]
    },
    {
      icon: FaUserMd,
      title: "ValorView™ IME",
      description: "Independent medical exams for veterans and disability claims",
      link: "/services/valorview-ime",
      color: "#4169E1",
      features: ["Comprehensive exams", "Detailed reports", "Expert assessment"]
    },
    {
      icon: FaHandsHelping,
      title: "Nourish & Thrive™ Journey",
      description: "12-month weight management and wellness transformation",
      link: "/services/nourish-thrive-journey",
      color: "#FAAD3F",
      features: ["Personalized nutrition", "Lifestyle coaching", "Sustainable results"]
    }
  ],
  other: [
    {
      icon: FaHeart,
      title: "Faith & Family Medicine™",
      description: "Whole-person care honoring body, soul, and spirit",
      link: "/services/faith-family-medicine",
      color: "#4169E1"
    },
    {
      icon: FaShieldAlt,
      title: "TrueRelief™ Therapy",
      description: "Non-opioid pain management",
      link: "/services/truerelief-therapy",
      color: "#F48120"
    },
    {
      icon: FaHeart,
      title: "PeaceWithin™ Life Coaching",
      description: "Trauma-informed healing and mental health support",
      link: "/services/peacewithin-life-coaching",
      color: "#4169E1"
    },
    {
      icon: FaUserMd,
      title: "ClearRoad™ DOT Exams",
      description: "Commercial driver physicals",
      link: "/services/clearroad-dot-exams",
      color: "#FAAD3F"
    },
    {
      icon: FaShieldAlt,
      title: "ValorLink™ Letters",
      description: "Veteran disability support letters",
      link: "/services/valorlink-letter",
      color: "#F48120"
    },
    {
      icon: FaCalendarCheck,
      title: "MyClinic365™",
      description: "Workplace healthcare solutions",
      link: "/services/myclinic365",
      color: "#4169E1"
    },
    {
      icon: FaHandsHelping,
      title: "CareBridge™",
      description: "24/7 telehealth platform",
      link: "/services/carebridge",
      color: "#FAAD3F"
    }
  ]
};

export default function ServicesMainPage() {
  return (
    <>
      <Header />
      <main className={styles.servicesMain}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <div className={styles.heroPattern}></div>
            <div className={styles.heroGradient}></div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleAccent}>Comprehensive</span>
                <br />Healthcare Services
              </h1>
              <p className={styles.heroSubtitle}>
                Quality healthcare that treats the whole person - body, mind, and spirit.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryButton}>
                  <FaPhone /> Schedule Appointment
                </Link>
                <a href="tel:816-427-5320" className={styles.secondaryButton}>
                  Call: 816-427-5320
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services - Top 3 */}
        <section id="featured" className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Our Top Services</span>
              <h2 className={styles.sectionTitle}>Most Popular Treatments</h2>
              <p className={styles.sectionDescription}>
                Discover our most sought-after services delivering exceptional results.
              </p>
            </div>

            <div className={styles.featuredGrid}>
              {services.featured.map((service, index) => (
                <Link href={service.link} key={index} className={styles.featuredCard}>
                  <div className={styles.cardHeader}>
                    <div
                      className={styles.iconWrapper}
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon
                        className={styles.serviceIcon}
                        style={{ color: service.color }}
                      />
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className={styles.featureIcon} style={{ color: service.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore} style={{ color: service.color }}>
                      Learn More <FaArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className={`${styles.servicesSection} ${styles.altBackground}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Additional Services</h2>
              <p className={styles.sectionDescription}>
                Comprehensive healthcare solutions for all your needs.
              </p>
            </div>

            <div className={styles.otherServicesGrid}>
              {services.other.map((service, index) => (
                <Link href={service.link} key={index} className={styles.otherServiceCard}>
                  <service.icon className={styles.otherServiceIcon} style={{ color: service.color }} />
                  <h4 className={styles.otherServiceTitle}>{service.title}</h4>
                  <p className={styles.otherServiceDesc}>{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
              <p className={styles.ctaDescription}>
                Contact us today to schedule your appointment or learn more about our services.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Schedule Appointment
                </Link>
                <a href="tel:816-427-5320" className={styles.ctaSecondary}>
                  Call: 816-427-5320
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
