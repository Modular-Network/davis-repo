/*
 Transaction Component placed in main dash viewhas:
   Tx description, 
   who initiated it, 
   how many signatures have signed it, 
   how many signatures are needed, and 
   status of pending not signed, 
   pending signed, complete, 
   declined, view more button. 
   If pending and not signed, a button to sign or decline, if declined, a button to affirm

   View more component has: TODO
     Tx hash, from address hash, to address hash
*/

import React from 'react'
import styles from './styles.css'

const OrganizationTransactionStatus = ({ data }) => {

  //adding two styles with styles.something syntax?
  return (
    <div className={styles.card}>
      <div className={styles.init}>
        <p>Initiated By: Vera</p>
      </div>
      <div className={styles.transaction}>
        <p className={styles.pending}>(pending)</p>        
        <p className={styles.amount}>0.4 ETH</p>
        <p className={styles.reason}>Well, I really feel we need some cats in the office. Sometimes coding is hard and I want something soft to hold.</p>
      </div>
      <div className='styles.icons'>
        <div>
          <i className='material-icons'>create</i>
          <p>3</p>
        </div>
        <div>
          <i className='material-icons'>not_interested</i>
          <p>1</p>
        </div>

        <div>
          <i className='material-icons'>warning</i>
          <p>2</p>
        </div>

      </div>
      <div className={styles.level}>

        <div>
          <input type="submit" value="Sign" />
        </div>

        <div>
          <input type="submit" value="Decline" />
        </div>

        <div className={styles.circle}>
          <p>5</p>
        </div>

      </div>
    </div>
  )
}

export default OrganizationTransactionStatus;