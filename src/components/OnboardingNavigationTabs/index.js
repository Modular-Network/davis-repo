import React from 'react';
import styles from './styles.css';

const getLine = (section) => {
  switch (section) {
    case 'user':
      return styles.lUser;
    case 'email':
      return styles.lEmail;
    case 'pass':
      return styles.lPass;
    case 'phone':
      return styles.lPhone;
    default:
      return 'error'
  }
}

const OnboardingNavigationTabs = ({ section, changeSection }) => {
  let lClass = getLine(section)

  return (
    <div>
      <div className={styles.base}>
        <div className={styles.user} onClick={e => changeSection('user')}>USERNAME</div>
        <div className={styles.email} onClick={e => changeSection('email')}>EMAIL ADDRESS</div>
        <div className={styles.pass} onClick={e => changeSection('pass')}>PASSWORD</div>
        <div className={styles.phone} onClick={e => changeSection('phone')}>PHONE NUMBER</div>
      </div>
      <div className={lClass}></div>
    </div>
  )
}

export default OnboardingNavigationTabs;
