'use client';

import styles from './peacewithin-life-coaching.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaBrain, FaHandsHelping, FaUserShield, FaPrayingHands, FaLeaf } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function PeaceWithinLifeCoachingPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>PeaceWithin™ Life Coaching</h1>
            <p className={styles.heroSubtitle}>Your Journey to Healing Begins Here</p>
            <p className={styles.heroDescription}>
              Life has a way of presenting us with challenges that can feel overwhelming. 
              Whether you're struggling with trauma, anxiety, depression, or life transitions, 
              PeaceWithin™ offers a safe harbor where your story matters and healing begins.
            </p>
            <div className={styles.heroButtons}>
              <a href="tel:816-427-5320" className={styles.primaryButton}>
                Begin Your Journey
              </a>
              <Link href="#philosophy" className={styles.secondaryButton}>
                Learn Our Approach
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/services/peacewithin-life-coaching/hero.jpg"
              alt="PeaceWithin Life Coaching - Mental Health Support"
              width={600}
              height={400}
              className={styles.image}
              unoptimized
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
              <div className={styles.statDescription}>Supporting healing journeys</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Lives Transformed</div>
              <div className={styles.statDescription}>Through compassionate coaching</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
              <div className={styles.statDescription}>Recommend our services</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support Available</div>
              <div className={styles.statDescription}>Crisis resources on hand</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Choose PeaceWithin™?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaHeart className={styles.benefitIcon} />
              <h3>Compassionate Care</h3>
              <p>A safe, judgment-free space where you're accepted exactly as you are.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaBrain className={styles.benefitIcon} />
              <h3>Evidence-Based</h3>
              <p>Proven therapeutic techniques combined with personalized coaching strategies.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaHandsHelping className={styles.benefitIcon} />
              <h3>Personalized Approach</h3>
              <p>Tailored to your unique needs, background, and life circumstances.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaUserShield className={styles.benefitIcon} />
              <h3>Complete Confidentiality</h3>
              <p>Your privacy and trust are our highest priorities.</p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className={styles.processSection}>
          <h2 className={styles.sectionTitle}>Our Healing Philosophy</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Initial Connection</h3>
              <p>Begin with a compassionate consultation to understand your unique journey</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Personalized Plan</h3>
              <p>Develop a tailored approach that honors your beliefs and goals</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Guided Growth</h3>
              <p>Walk alongside you with evidence-based techniques and genuine care</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Lasting Change</h3>
              <p>Build resilience and tools for continued healing beyond our sessions</p>
            </div>
          </div>
        </section>

        {/* Spiritual Integration */}
        <section className={styles.sampleSection}>
          <div className={styles.sampleContent}>
            <div className={styles.sampleText}>
              <h2>Honoring Your Spiritual Journey</h2>
              <p>
                We understand that spirituality plays different roles in different lives. 
                Our approach respects and integrates your personal beliefs, whether you 
                find strength in faith or prefer secular evidence-based methods.
              </p>
              <ul className={styles.includedList}>
                <li>Faith-integrated counseling for those who desire it</li>
                <li>Secular evidence-based approaches available</li>
                <li>Mindfulness and meditation practices</li>
                <li>Respect for all spiritual and cultural backgrounds</li>
                <li>No pressure to adopt any particular belief system</li>
              </ul>
              <Link href="/contact" className={styles.sampleButton}>
                Discuss Your Preferences
              </Link>
            </div>
            <div className={styles.sampleImage}>
              <div className={styles.spiritualCards}>
                <div className={styles.spiritualCard}>
                  <FaPrayingHands className={styles.spiritualIcon} />
                  <h3>Faith-Based Support</h3>
                  <p>Integrate your spiritual beliefs as a source of strength</p>
                </div>
                <div className={styles.spiritualCard}>
                  <FaLeaf className={styles.spiritualIcon} />
                  <h3>Secular Approaches</h3>
                  <p>Evidence-based techniques without religious components</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className={styles.conditionsSection}>
          <h2 className={styles.sectionTitle}>Our Areas of Specialization</h2>
          <div className={styles.conditionsGrid}>
            <div className={styles.conditionCategory}>
              <h3>Trauma Recovery</h3>
              <ul>
                <li><FaUserShield /> PTSD and complex trauma</li>
                <li><FaUserShield /> Childhood trauma</li>
                <li><FaUserShield /> Abuse and neglect</li>
                <li><FaUserShield /> Accident and injury trauma</li>
                <li><FaUserShield /> Grief and loss</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Anxiety & Stress</h3>
              <ul>
                <li><FaBrain /> Generalized anxiety</li>
                <li><FaBrain /> Social anxiety</li>
                <li><FaBrain /> Panic attacks</li>
                <li><FaBrain /> Work-related stress</li>
                <li><FaBrain /> Phobias</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Depression & Mood</h3>
              <ul>
                <li><FaHeart /> Major depression</li>
                <li><FaHeart /> Seasonal affective disorder</li>
                <li><FaHeart /> Bipolar support</li>
                <li><FaHeart /> Chronic sadness</li>
                <li><FaHeart /> Emotional numbness</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Life Transitions</h3>
              <ul>
                <li><FaHandsHelping /> Career changes</li>
                <li><FaHandsHelping /> Relationship issues</li>
                <li><FaHandsHelping /> Divorce or separation</li>
                <li><FaHandsHelping /> Retirement adjustment</li>
                <li><FaHandsHelping /> Identity exploration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>Stories of Transformation</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "PeaceWithin gave me my life back. After years of struggling with 
                anxiety, I finally found tools that work and a coach who truly understands."
              </p>
              <div className={styles.testimonialAuthor}>- Sarah M., Teacher</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "The trauma-informed approach made all the difference. I felt safe 
                to explore difficult memories and finally begin healing."
              </p>
              <div className={styles.testimonialAuthor}>- Michael R., Veteran</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Life coaching helped me navigate my divorce with grace and discover 
                who I am beyond that relationship. I'm grateful for the support."
              </p>
              <div className={styles.testimonialAuthor}>- Jennifer K., Business Owner</div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}