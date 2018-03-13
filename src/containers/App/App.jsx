import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import styles from './styles.css';

import OnBoarding from 'containers/Onboarding'

class App extends Component {
    render() {
        const { auth } = this.props;

        return (
            <div>

                {auth ?
                    <Route exact path='/' component={() => <p>hi! im blossom!</p>} />
                    :
                    <OnBoarding />
                }

            </div>
        )
    }

}

export default withRouter(connect(
    state => ({
        auth: state.user.isAuthenticated
    })
)(App));
