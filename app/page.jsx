'use client';
import { useState } from 'react';
import Carousel from '../components/carousel/carousel';
import Link from 'next/link';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img 
          src="/images/garcia-logo.png" 
          alt="Garcia Family Medicine Logo" 
          width="150" 
          height="150"
        />
      </div>
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>Garcia Family Medicine</h1>
          <p className={styles.subtitle}>Treating the whole patient: Spirit, Body, and Soul</p>
          <p className={styles.heroDescription}>
            Compassionate, faith-based healthcare serving Blue Springs, Independence, 
            Lee's Summit, and the greater Kansas City area
          </p>
          <div className={styles.ctaContainer}>
            <Link href="/contact" className={styles.ctaButton}>Schedule Appointment</Link>
            <Link href="/services" className={styles.secondaryButton}>View Services</Link>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>25+</div>
            <div className={styles.statLabel}>Years of Experience</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10000+</div>
            <div className={styles.statLabel}>Patients Served</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Compassionate Care</div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <Carousel />
      </section>
    </div>
  );
}