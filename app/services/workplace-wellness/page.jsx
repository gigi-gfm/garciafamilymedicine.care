'use client';

import styles from './myclinic365.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaBriefcase, FaHeartbeat, FaClock, FaShieldAlt, FaChartLine, FaUserMd } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function MyClinic365Page() {
  return (
    <>
      <Header />
      <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>MyClinic365™</h1>
          <p className={styles.heroSubtitle}>Workplace Healthcare Access Revolutionized</p>
          <p className={styles.heroDescription}>
            Transform your workplace into a hub of health and wellness. MyClinic365™ brings 
            comprehensive healthcare services directly to your employees, 365 days a year.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Request Corporate Demo
            </Link>
            <Link href="#benefits" className={styles.secondaryButton}>
              See ROI Calculator
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>42%</div>
            <div className={styles.statLabel}>Reduced Sick Days</div>
            <div className={styles.statDescription}>Average reduction in employee absenteeism</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3.2x</div>
            <div className={styles.statLabel}>ROI</div>
            <div className={styles.statDescription}>Return on healthcare investment</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>365</div>
            <div className={styles.statLabel}>Days Available</div>
            <div className={styles.statDescription}>Year-round access to care</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Employee Satisfaction</div>
            <div className={styles.statDescription}>With workplace health benefits</div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Complete Workplace Health Solution</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <FaBriefcase className={styles.featureIcon} />
            <h3>On-Site Clinics</h3>
            <p>Full-service medical facilities right at your workplace</p>
          </div>
          <div className={styles.featureCard}>
            <FaHeartbeat className={styles.featureIcon} />
            <h3>Virtual Care 24/7</h3>
            <p>Round-the-clock telehealth for employees and families</p>
          </div>
          <div className={styles.featureCard}>
            <FaClock className={styles.featureIcon} />
            <h3>Flexible Scheduling</h3>
            <p>Appointments that fit around work schedules</p>
          </div>
          <div className={styles.featureCard}>
            <FaShieldAlt className={styles.featureIcon} />
            <h3>Preventive Programs</h3>
            <p>Wellness screenings and health education</p>
          </div>
          <div className={styles.featureCard}>
            <FaChartLine className={styles.featureIcon} />
            <h3>Health Analytics</h3>
            <p>Data-driven insights for workforce health</p>
          </div>
          <div className={styles.featureCard}>
            <FaUserMd className={styles.featureIcon} />
            <h3>Care Coordination</h3>
            <p>Seamless integration with existing benefits</p>
          </div>
        </div>
      </section>

      <section id="benefits" className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsContent}>
            <h2>Benefits for Employers</h2>
            <ul className={styles.benefitsList}>
              <li>Optimize healthcare utilization and outcomes</li>
              <li>Decrease absenteeism and presenteeism</li>
              <li>Improve employee retention and recruitment</li>
              <li>Enhance workplace productivity</li>
              <li>Demonstrate commitment to employee wellbeing</li>
              <li>Access real-time health analytics dashboard</li>
            </ul>
          </div>
          <div className={styles.benefitsContent}>
            <h2>Benefits for Employees</h2>
            <ul className={styles.benefitsList}>
              <li>Convenient access to quality healthcare</li>
              <li>No travel time for medical appointments</li>
              <li>Reduced out-of-pocket expenses</li>
              <li>Comprehensive preventive care</li>
              <li>Family coverage options available</li>
              <li>Personalized health coaching</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Services Included</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCategory}>
            <h3>Primary Care</h3>
            <ul>
              <li>Annual physicals</li>
              <li>Acute illness treatment</li>
              <li>Chronic disease management</li>
              <li>Immunizations</li>
            </ul>
          </div>
          <div className={styles.serviceCategory}>
            <h3>Specialty Services</h3>
            <ul>
              <li>Mental health counseling</li>
              <li>Physical therapy</li>
              <li>Nutrition counseling</li>
              <li>Dermatology</li>
            </ul>
          </div>
          <div className={styles.serviceCategory}>
            <h3>Diagnostics</h3>
            <ul>
              <li>Lab work</li>
              <li>X-rays</li>
              <li>EKGs</li>
              <li>Health screenings</li>
            </ul>
          </div>
          <div className={styles.serviceCategory}>
            <h3>Wellness Programs</h3>
            <ul>
              <li>Fitness assessments</li>
              <li>Stress management</li>
              <li>Smoking cessation</li>
              <li>Weight management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.implementationSection}>
        <h2 className={styles.sectionTitle}>Easy Implementation Process</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>1</div>
            <div className={styles.timelineContent}>
              <h3>Consultation</h3>
              <p>Assess your workplace needs and design custom solution</p>
              <span className={styles.timelineDuration}>Week 1-2</span>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>2</div>
            <div className={styles.timelineContent}>
              <h3>Setup</h3>
              <p>Install clinic infrastructure or configure virtual platform</p>
              <span className={styles.timelineDuration}>Week 3-4</span>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>3</div>
            <div className={styles.timelineContent}>
              <h3>Launch</h3>
              <p>Employee onboarding and service activation</p>
              <span className={styles.timelineDuration}>Week 5</span>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>4</div>
            <div className={styles.timelineContent}>
              <h3>Optimize</h3>
              <p>Continuous improvement based on utilization data</p>
              <span className={styles.timelineDuration}>Ongoing</span>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.successSection}>
        <h2 className={styles.sectionTitle}>Success Stories</h2>
        <div className={styles.successGrid}>
          <div className={styles.successCard}>
            <div className={styles.successQuote}>
              "MyClinic365 transformed our workplace culture. Employee satisfaction 
              scores increased by 35% and we've seen significant improvements in overall employee health outcomes."
            </div>
            <div className={styles.successAuthor}>
              <strong>Jennifer Martinez</strong>
              <span>HR Director, Tech Solutions Inc.</span>
            </div>
          </div>
          <div className={styles.successCard}>
            <div className={styles.successQuote}>
              "The convenience factor alone makes this worthwhile. Our team loves 
              having healthcare right here at work."
            </div>
            <div className={styles.successAuthor}>
              <strong>David Chen</strong>
              <span>CEO, Manufacturing Corp</span>
            </div>
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </>
  );
}