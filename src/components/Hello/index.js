import React from 'react';
import Image from 'react-image-resizer';
import blossom from 'assets/blossom_logo_tm.svg';
import styles from './styles.css';

/*TODO: Add transtion to fade up and in on load and fade down and out on exit*/

const Hello = ({movePage}) => {
  return (
    <div className={styles.base}>
      <div className={styles.hello}>Hello,</div>
      <div className={styles.blossom}>Welcome to </div>
      <div className={styles.logo}>{<Image src={blossom} height={ 45 } width={ 200 }/>}</div>
      <div className={styles.lets} onClick={e => movePage(1) }>{"Let's get started → "}</div>
    </div>
  )
}

export default Hello;
