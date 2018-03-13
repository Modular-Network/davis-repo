import React, { Component } from 'react'
import OnboardingInputField from 'components/OnboardingInputField'
import styles from './styles.css'

class PhoneVerification extends Component {
  constructor() {
    super();
    this.state = {
      code: ''
    }

    this.setPhoneCode = this.setPhoneCode.bind(this);
  }

  setPhoneCode(e) {
    const { collectCode, code } = this.props;

    collectCode({
      code: code
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <OnboardingInputField
          onChange={(newCode) => { this.setState({ code: newCode }) }}
          text='Enter the 6-digit code we sent you'
          type='text'
          value={this.state.code}
          action={() => this.setPhoneCode()}
        />
      </div>
    )
  }
}

export default PhoneVerification;