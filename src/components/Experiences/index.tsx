import React from 'react';
import styles from './styles.module.css';

import { Experiences } from '@site/src/content/Experiences/items';

export default function Component(): JSX.Element {
  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.experienceTitle}>Experiences</h2>
      <ul className={styles.experienceList}>
        {Experiences.map((job) => (
          <li key={job.id} className={styles.experienceItem}>
            <div>
              <img
                src={job.companyLogo}
                alt={`${job.companyName} logo`}
                className={styles.companyLogo}
              />
            </div>
            <div className={styles.jobInfo}>
              <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
              <p className={styles.companyName}>{job.companyName}</p>
              <div className={styles.jobMeta}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>
                  {job.startDate} - {job.endDate}
                </span>
              </div>
              <div className={styles.jobMeta}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{job.location}</span>
              </div>
              <ul className={styles.jobDescription}>
                {job.description.map((item, index) => (
                  <li key={index} className={styles.jobDescriptionItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}