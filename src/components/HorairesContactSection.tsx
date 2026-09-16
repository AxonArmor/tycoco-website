import React from 'react';
import styles from './HorairesContactSection.module.css';

export default function HorairesContactSection() {
  const schedule = [
    { day: 'Lundi', hours: '07:30 - 20:00' },
    { day: 'Mardi', hours: '07:30 - 20:00' },
    { day: 'Mercredi', hours: '07:30 - 20:00' },
    { day: 'Jeudi', hours: '07:30 - 20:00' },
    { day: 'Vendredi', hours: '07:30 - 22:00 (Nocturne)' },
    { day: 'Samedi', hours: '08:00 - 22:00 (Nocturne)' },
    { day: 'Dimanche', hours: '08:30 - 13:30 / 17:00 - 20:00' },
  ];

  return (
    <section id="contact" className={styles.horairesSection}>
      <div className={styles.container}>
        
        {/* Left Card: Opening Hours */}
        <div className={styles.hoursCard}>
          <h2 className={styles.hoursTitle}>Nos Horaires d'Ouverture</h2>
          
          <div className={styles.scheduleList}>
            {schedule.map((item, index) => (
              <div key={index} className={styles.scheduleRow}>
                <span className={styles.day}>{item.day}</span>
                <span className={styles.hours}>{item.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: Location & Contact */}
        <div className={styles.locationCol}>
          <div className={styles.badge}>
            OÙ NOUS TROUVER
          </div>

          <h2 className={styles.title}>
            Venez nous rendre<br />visite à Plougourvest
          </h2>

          <div className={styles.contactCard}>
            {/* Address */}
            <div className={styles.contactItem}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className={styles.itemTitle}>Adresse principale</h4>
                <p className={styles.itemSub}>Centre Bourg, 29400 Plougourvest</p>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.contactItem}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 className={styles.itemTitle}>Téléphone</h4>
                <p className={styles.itemSub}>XX XX XX XX XX</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
