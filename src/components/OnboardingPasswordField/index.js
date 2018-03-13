import React, { Component } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import styles from './styles.css';

class OnboardingPasswordField extends Component {

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.props.passOne) {
        return false;
      }
      return true;
    });
  }

  render() {
    const { onChange, text, passOne, passTwo, changeSection } = this.props;

    return (
      <div className={styles.base}>
        <ValidatorForm onSubmit={() => {}}>
          <TextValidator
            onChange={(e) => onChange({password: e.target.value, error: false})}
            fullWidth={true}
            floatingLabelText={text}
            underlineStyle={{ borderColor: 'white' }}
            underlineFocusStyle={{ borderColor: '#FFB087', opacity: '0.8' }}
            floatingLabelStyle={{ color: 'white', fontSize: '3.6rem', top: '-2rem' }}
            floatingLabelFocusStyle={{ color: 'white', fontSize: '2.4rem' }}
            inputStyle={{ color: 'white', fontSize: '4rem', top: '-1rem' }}
            errorStyle={{ color: 'yellow', position: 'absolute', bottom: '-1rem' }}
            name="password"
            type="password"
            validators={['required', 'matchRegexp:(?=.{8,})(?=.*[A-Z])']}
            errorMessages={['this field is required', 'must contain a minimum of 8 characters and one uppercase character.']}
            value={passOne}
            className={styles.inputOne}
            onKeyPress={e => {
              if ((e.key === 'Enter') && (passOne !== '')) {
                changeSection()
              }
            }}
          />
          <div className={passOne === '' ? styles.dark : styles.circle}></div>
          <TextValidator
            onChange={(e) => onChange({secondPass: e.target.value, error: false})}
            name="repeatPassword"
            type="password"
            validators={['isPasswordMatch', 'required']}
            errorMessages={['password mismatch', 'this field is required']}
            fullWidth={true}
            underlineStyle={{ borderColor: 'white' }}
            underlineFocusStyle={{ borderColor: '#FFB087', opacity: '0.8' }}
            inputStyle={{ color: 'white', fontSize: '4rem', top: '-1rem' }}
            errorStyle={{ color: 'yellow', position: 'absolute', bottom: '-1rem'}}
            value={passTwo}
            className={styles.inputTwo}
            onKeyPress={e => {
              if ((e.key === 'Enter') && (passTwo !== '')) {
                changeSection()
              }
            }}
          />
        </ValidatorForm>
        <div className={passTwo === '' ? styles.dark : styles.circle} onClick={passTwo === '' ? null : changeSection}></div>
      </div>
    );
  }
}

export default OnboardingPasswordField