'use client';
import { useState } from 'react';
import Carousel from '../components/carousel/carousel';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOverlay} />
          <div className={styles.meshPattern} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>
            Garcia Family Medicine
          </h1>
          <p className={styles.subtitle}>
            Compassionate, Faith-Based Healthcare in Blue Springs, MO
          </p>

          <div className={styles.ctaContainer}>
            <Link href="/services" className={styles.ctaButton}>
              Our Services
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our Featured Services</h2>
        <p className={styles.sectionSubtitle}>
          Comprehensive healthcare services tailored to your needs
        </p>
        
        <Carousel />
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/services" className={styles.ctaButton}>
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}