'use client'

import styles from '../learn/learn-article.module.css'
import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer/footer'

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / Contact Us
            </nav>
            <h1 className={styles.articleTitle}>Contact Garcia Family Medicine</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Available: Tuesday-Friday 9AM-5PM</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>Quick Links</h2>
            <ul className={styles.tocList}>
              <li><a href="#office">Office Information</a></li>
              <li><a href="#hours">Hours of Operation</a></li>
              <li><a href="#location">Location & Directions</a></li>
              <li><a href="#appointments">Scheduling Appointments</a></li>
              <li><a href="#emergency">Emergency Care</a></li>
              <li><a href="#payment">Payment Information</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="office" className={styles.section}>
            <h2 className={styles.sectionTitle}>Office Information</h2>
            <p className={styles.leadText}>
              Garcia Family Medicine is conveniently located in Blue Springs, Missouri, providing comprehensive healthcare services to patients throughout the Kansas City metropolitan area. Our modern medical facility offers a welcoming environment with state-of-the-art equipment and ample free parking.
            </p>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Primary Contact</h3>
                <ul>
                  <li><strong>Phone:</strong> (816) 427-5320</li>
                  <li><strong>Fax:</strong> (816) 847-0281</li>
                  <li><strong>Email:</strong> admin@garciafamilymedicine.care</li>
                  <li><strong>Text/SMS:</strong> Available for existing patients</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Physical Address</h3>
                <ul>
                  <li>801 NW St. Mary Drive</li>
                  <li>Suite 209</li>
                  <li>Blue Springs, MO 64014</li>
                  <li>Free parking available on-site</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="hours" className={styles.section}>
            <h2 className={styles.sectionTitle}>Hours of Operation</h2>
            <p className={styles.sectionText}>
              Our office maintains regular business hours to serve your healthcare needs. We recommend scheduling appointments in advance to ensure minimal wait times.
            </p>

            <div className={styles.infoCard}>
              <h3>Regular Office Hours</h3>
              <ul>
                <li><strong>Monday:</strong> CLOSED</li>
                <li><strong>Tuesday:</strong> 9:00 AM - 5:00 PM</li>
                <li><strong>Wednesday:</strong> 9:00 AM - 5:00 PM</li>
                <li><strong>Thursday:</strong> 9:00 AM - 5:00 PM</li>
                <li><strong>Friday:</strong> 9:00 AM - 5:00 PM</li>
                <li><strong>Saturday:</strong> CLOSED</li>
                <li><strong>Sunday:</strong> CLOSED</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>Holiday Schedule</h4>
              <p>
                We observe major federal holidays. The office will be closed on New Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving Day, and Christmas Day. Please call ahead to confirm availability around holiday periods.
              </p>
            </div>

            <div className={styles.keyPoints}>
              <h3>After-Hours Care</h3>
              <ul className={styles.keyPointsList}>
                <li>For urgent matters after hours, please leave a voicemail and we will return your call the next business day</li>
                <li>Established patients may have access to our after-hours triage line</li>
                <li>For non-emergency medical questions, use the patient portal messaging system</li>
                <li>Telehealth appointments may be available for certain conditions</li>
              </ul>
            </div>
          </section>

          <section id="location" className={styles.section}>
            <h2 className={styles.sectionTitle}>Location & Directions</h2>
            <p className={styles.sectionText}>
              Our office is conveniently located in Blue Springs, easily accessible from I-70 and Highway 7. We're situated in a professional medical building with wheelchair accessibility and ample parking.
            </p>

            {/* Interactive Map */}
            <div style={{ margin: '30px 0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.8471599547!2d-94.25822068464691!3d39.08709897954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c11f5e0e6d3a4f%3A0x1234567890abcdef!2s801%20NW%20St%20Mary%20Dr%2C%20Blue%20Springs%2C%20MO%2064014!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Garcia Family Medicine Location"
              ></iframe>
            </div>

            <h3 className={styles.subsectionTitle}>Driving Directions</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>From Kansas City</h3>
                <ul>
                  <li>Take I-70 East toward St. Louis</li>
                  <li>Exit at Highway 7 North (Exit 20)</li>
                  <li>Continue on Highway 7 for approximately 2 miles</li>
                  <li>Turn right onto NW St. Mary Drive</li>
                  <li>Our building will be on your right</li>
                  <li>Enter Suite 209 on the second floor</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>From Independence</h3>
                <ul>
                  <li>Take Highway 40 East</li>
                  <li>Turn left onto Highway 7 North</li>
                  <li>Continue for approximately 3 miles</li>
                  <li>Turn right onto NW St. Mary Drive</li>
                  <li>Our building will be on your right</li>
                  <li>Enter Suite 209 on the second floor</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Parking & Accessibility</h3>
              <ul className={styles.keyPointsList}>
                <li>Free parking available in front of building</li>
                <li>Handicapped parking spaces near entrance</li>
                <li>Wheelchair accessible entrance and elevator</li>
                <li>Wide doorways and accessible restrooms</li>
                <li>Ground-level entrance available upon request</li>
              </ul>
            </div>
          </section>

          <section id="appointments" className={styles.section}>
            <h2 className={styles.sectionTitle}>Scheduling Appointments</h2>
            <p className={styles.sectionText}>
              We offer multiple convenient ways to schedule your appointment. New patients are welcome, and we strive to accommodate same-day appointments for urgent needs when possible.
            </p>

            <h3 className={styles.subsectionTitle}>How to Schedule</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>By Phone</h3>
                <ul>
                  <li>Call (816) 427-5320 during business hours</li>
                  <li>Our staff will help find a convenient time</li>
                  <li>Have your insurance information ready</li>
                  <li>Prepare a list of current medications</li>
                  <li>Note any specific concerns to discuss</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Online Portal</h3>
                <ul>
                  <li>Existing patients can use the patient portal</li>
                  <li>Request appointments 24/7</li>
                  <li>View available time slots</li>
                  <li>Receive appointment confirmations</li>
                  <li>Set up appointment reminders</li>
                </ul>
              </div>
            </div>

          </section>


          <section id="emergency" className={styles.section}>
            <h2 className={styles.sectionTitle}>Emergency Care Information</h2>
            <p className={styles.sectionText}>
              It's important to know when to seek emergency care versus scheduling an office visit. Understanding the difference can save time and potentially save lives.
            </p>

            <div className={styles.warningBox}>
              <h4>Call 911 Immediately For:</h4>
              <p>
                Chest pain, difficulty breathing, severe bleeding, stroke symptoms (facial drooping, arm weakness, speech difficulty), loss of consciousness, severe allergic reactions, serious injuries, or any life-threatening emergency.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>When to Seek Care</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Emergency Room</h3>
                <ul>
                  <li>Chest pain or pressure</li>
                  <li>Difficulty breathing</li>
                  <li>Severe abdominal pain</li>
                  <li>Head injuries with confusion</li>
                  <li>Severe burns or wounds</li>
                  <li>Poisoning or overdose</li>
                  <li>Severe dehydration</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Urgent Care</h3>
                <ul>
                  <li>Minor injuries and cuts</li>
                  <li>Fever without severe symptoms</li>
                  <li>Mild to moderate pain</li>
                  <li>Cold and flu symptoms</li>
                  <li>Minor burns</li>
                  <li>Sprains and strains</li>
                  <li>UTI symptoms</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Office Visit</h3>
                <ul>
                  <li>Chronic condition management</li>
                  <li>Preventive care</li>
                  <li>Medication management</li>
                  <li>Non-urgent symptoms</li>
                  <li>Follow-up care</li>
                  <li>Health counseling</li>
                  <li>Routine screenings</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="payment" className={styles.section}>
            <h2 className={styles.sectionTitle}>Payment Information</h2>
            <p className={styles.sectionText}>
              We operate on a direct primary care model and do not accept insurance. This allows us to provide more personalized care at transparent, affordable prices.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Payment Options</h3>
                <ul>
                  <li>Cash payments</li>
                  <li>Check payments</li>
                  <li>All major credit cards</li>
                  <li>CareCredit financing available</li>
                  <li>Cherry payment plans</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Our Direct Care Model</h3>
                <ul>
                  <li>Transparent pricing</li>
                  <li>No insurance hassles</li>
                  <li>Longer appointment times</li>
                  <li>Direct access to your physician</li>
                  <li>Affordable membership options</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Related Links */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Additional Information</h3>
            <div className={styles.relatedGrid}>
              <Link href="/services" className={styles.relatedCard}>
                <h4>Our Services</h4>
                <p>Explore our comprehensive healthcare offerings</p>
              </Link>
              <Link href="/meetthedoctor" className={styles.relatedCard}>
                <h4>Meet Dr. Garcia</h4>
                <p>Learn about our physician and practice philosophy</p>
              </Link>
              <Link href="/news" className={styles.relatedCard}>
                <h4>News & Events</h4>
                <p>Stay updated with practice news and health events</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
