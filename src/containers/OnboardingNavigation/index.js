import React from 'react';
import Image from 'react-image-resizer';
import Skip from 'components/Skip';
import next from 'assets/next.png';
import OnboardingNavigationCircles from 'components/OnboardingNavigationCircles';
import styles from './styles.css';

const OnboardingNavigation = ({pages, selected, movePage}) => {
  return (
    <div className={styles.base}>
      <Skip />
      <OnboardingNavigationCircles pages={pages} selected={selected}/>
      {selected === 0
        ? <div className={styles.next} onClick={e=>movePage(1)}>
            <Image src={next} height={ 38 } width={ 38 }/>
          </div>
        : null}
    </div>
  )
}

export default OnboardingNavigation;
