import React, { Component } from 'react';
import OnboardingNavigationTabs from 'components/OnboardingNavigationTabs';
import OnboardingInputField from 'components/OnboardingInputField';
import OnboardingEmailField from 'components/OnboardingEmailField';
import OnboardingPasswordField from 'components/OnboardingPasswordField';
import OnboardingPhoneField from 'components/OnboardingPhoneField';
import styles from './styles.css';

/*TODO: Add field checks to setUserObject function*/

class UserRegistration extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      secondPass: '',
      phone: '',
      section: 'user',
      error: false
    }
    this.setUserObject = this.setUserObject.bind(this)
    this.changeSection = this.changeSection.bind(this)
    this.updateInfo = this.updateInfo.bind(this)

  }

  doubleCheck(userData) {
      if (userData.username === '') {
        this.changeSection('user');
        this.setState({ error: true });
        return false;
      } 
      else if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email))){
        this.changeSection('email');
        this.setState({ error: true });
        return false;
      } 
      else if (!(/(?=.{8,})(?=.*[A-Z])/.test(userData.password)) || (userData.password !== userData.secondPass)){
        this.changeSection('pass');
        this.setState({ error: true, password: '', secondPass: '' });
        return false;
      }
      else if(!(/(?=.{9,})/.test(userData.phone))){
        this.changeSection('phone');
        this.setState({ error: true });
        return false;
      }

      return true;
  }

  setUserObject(e) {
    const { username, email, password, secondPass, phone } = this.state;

    const userData = {
      username: username,
      email: email,
      password: password,
      secondPass: secondPass,
      phone: phone
    }

    if(this.doubleCheck(userData)) {

      console.log(userData);
      
      this.props.collectUser({
        username: username,
        email: email,
        password: password,
        secondPass: secondPass,
        phone: phone
      });
      
    }
  }

  changeSection(section) {
    this.setState({ section: section })
  }

  updateInfo(payload) {
    this.setState({...payload});
  }

  getInput(section, changeSection, setUserObject) {
    const { username, email, password, secondPass, phone, error } = this.state;

    switch (section) {
      case 'user':
        return (
          <div>
            <OnboardingInputField
              onChange={this.updateInfo}
              text='What should I call you?'
              type='text'
              value={username}
              action={() => changeSection('email')}
            />
            {error ? <div className={styles.error}>Invalid Username</div> : null}
          </div>
        )
      case 'email':
        return (
          <div>
            <OnboardingEmailField
              onChange={this.updateInfo}
              text='What is your email address?'
              type='text'
              value={email}
              changeSection={() => changeSection('pass')}
            />
            {error ? <div className={styles.error}>Invalid Email</div> : null}
          </div>
        )
      case 'pass':
        return (
          <div>
            <OnboardingPasswordField
              onChange={this.updateInfo}
              text='Please chooose a secure password'
              passOne={password}
              passTwo={secondPass}
              changeSection={() => changeSection('phone')}
            />
            {error ? <div className={styles.errorPass}>Invalid Password</div> : null}
          </div>
        )
      case 'phone':
        return (
          <div>
            <OnboardingPhoneField
              onChange={this.updateInfo}
              text='What is your phone number?'
              type='text'
              value={phone}
              setUserObject={() => setUserObject()}
            />
            {error ? <div className={styles.error}>Invalid Phone</div> : null}
          </div>
        )
      default:
        return <div>something is wrong</div>
    }
  }

  render() {
    const { section } = this.state;
    return (
      <div className={styles.base}>
        <OnboardingNavigationTabs section={section} changeSection={this.changeSection} />
        <div className={styles.form}>
          {this.getInput(section, this.changeSection, this.setUserObject)}
        </div>
      </div>
    )
  }
}

export default UserRegistration;
