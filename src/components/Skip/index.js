import React from 'react';
import Image from 'react-image-resizer';
import question from 'assets/question.png';
import styles from './styles.css';

const Skip = () => {
  return (
    <div className={styles.base}>
      <div className={styles.skip}> SKIP SIGNUP </div>
      <div className={styles.question}><Image src={question} height={ 13 } width={ 13 } /> </div>
      <div className={styles.continue}>CONTINUE AS ANONYMOUS USER WITH LIMITED FUNCTIONALITY</div>
    </div>
  )
}

export default Skip;
