import React from 'react';
import styles from './styles.css';

const OnboardingNavigationCircles = ({pages, selected}) => {
  let circles = [];
  for(let i = 0; i <= pages; i++) {
    circles.push(<div key={i} className={selected === i ? styles.lit : styles.grey} />);
  }
  return (
    <div className={styles.base}>
      {circles}
    </div>
  )
}

export default OnboardingNavigationCircles;
