import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'redux/modules/user'

import Image from 'react-image-resizer';
import blossom from 'assets/blossom_logo.svg';
import blossomtree from 'assets/blossomtree.png';
import spore from 'assets/spore.png';
import Hello from 'components/Hello';
import UserRegistration from 'containers/UserRegistration';
import OnboardingNavigation from 'containers/OnboardingNavigation';
import PhoneVerification from 'components/PhoneVerification';
import styles from './styles.css';

let userObject = {}
let userCode = '';

/* TODO: Add spore animation */

class OnBoarding extends Component {
  constructor() {
    super()
    this.state = {
      pages: 2,
      pageIndex: 0,
      status: '',
      user: {}
    }

    this.movePage = this.movePage.bind(this);
    this.collectUser = this.collectUser.bind(this);
    this.collectCode = this.collectCode.bind(this);
  }

  movePage(page) {
    this.setState({ pageIndex: page })
  }

  collectUser(userData) {
    const { UserActions } = this.props;
    userObject = userData;

    this.registerUser(userObject)
      .then(res => {
        UserActions.updateUser(res);
        this.movePage(2);
      })
      .catch(err => console.log(err));
  }

  registerUser = async (userObject) => {
    const response = await axios.post('http://localhost:3001/users', userObject);
    if (response.status !== 200) throw Error(response);
    return response
  };

  collectCode(code) {
    const { UserActions } = this.props;
    userCode = code;

    this.verifyPhone(userCode)
      .then(res => {
        UserActions.validateUserPhone(); 
      })
      .catch(err => console.log(err));
  }

  verifyPhone = async (userCode) => {
    const response = await axios.post(`http://localhost:3001/${this.state.user.id}/confirm/sms/${userCode}`);
    if (response.status !== 200) throw Error(response);
    return response;
  }

  render() {
    const { pages, pageIndex } = this.state;

    return (
      <div className={styles.base}>

        <div className={styles.treeImg}>
          <Image src={blossomtree} height={1200} width={1200} />
        </div>

        <div className={styles.logo}>
          <Image src={blossom} height={18} width={122} />
        </div>

        <div className={styles.spore}>
          <Image src={spore} height={94} width={97} />
        </div>

        <div className={styles.dialogues}>
          {pageIndex === 0 ? <Hello movePage={this.movePage} /> : null}
          {pageIndex === 1 ? <UserRegistration collectUser={this.collectUser} /> : null}
          {pageIndex === 2 ? <PhoneVerification collectCode={this.collectCode} /> : null}
        </div>

        <OnboardingNavigation pages={pages}
          selected={pageIndex}
          movePage={(page) => { this.movePage(page) }}
        />

      </div>
    )
  }
}

export default connect(
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(OnBoarding);
