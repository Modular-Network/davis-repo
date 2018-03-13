import React from 'react';
import TextField from 'material-ui/TextField';
import styles from './styles.css';

/*TODO: Add icon in circles and opacity transitions*/

const OnboardingInputField = ({ onChange, text, type, value, action }) => (
  <div className={styles.base}>
    <TextField
      onChange={(e) => onChange({username: e.target.value, error: false})}
      hintText={value}
      floatingLabelText={text}
      type={type}
      fullWidth={true}
      underlineStyle={{ borderColor: 'white' }}
      underlineFocusStyle={{ borderColor: '#FFB087', opacity: '0.8'}}
      floatingLabelStyle={{ color: 'white', fontSize: '3.6rem', top: '-2rem'}}
      floatingLabelFocusStyle={{ color: 'white', fontSize: '2.4rem'}}
      inputStyle={{ color: 'white', fontSize: '6rem', top: '-2rem', fontWeight: '300', width: '90%'}}
      value={value}
      onKeyPress={e => {
        if ((e.key === 'Enter') && (value !== '')) {
          action()
        }
      }}
    />
    <div className={value === '' ? styles.dark : styles.circle} onClick={value === '' ? null : action}></div>
  </div>
);

export default OnboardingInputField;
