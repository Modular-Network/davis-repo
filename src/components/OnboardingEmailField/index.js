import React from 'react';
import styles from './styles.css';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const OnboardingEmailField = ({ onChange, text, type, value, changeSection }) => (
    <div className={styles.base}>
        <ValidatorForm onSubmit={() => {}} debounceTime={1000}>
            <TextValidator
                onChange={(e) => onChange({email: e.target.value, error: false})}
                hintText={value}
                floatingLabelText={text}
                type={type}
                fullWidth={true}
                underlineStyle={{ borderColor: 'white' }}
                underlineFocusStyle={{ borderColor: '#FFB087', opacity: '0.8' }}
                floatingLabelStyle={{ color: 'white', fontSize: '3.6rem', top: '-2rem' }}
                floatingLabelFocusStyle={{ color: 'white', fontSize: '2.4rem' }}
                inputStyle={{ color: 'white', fontSize: '6rem', top: '-2rem', fontWeight: '300', width: '90%' }}
                errorStyle={{ color: 'yellow', position: 'absolute', bottom: '-15px'}}
                value={value}
                name="email"
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
                onKeyPress={e => {
                    if ((e.key === 'Enter') && (value !== '')) {
                        changeSection()
                    }
                }}
            />
        </ValidatorForm>
        <div className={value === '' ? styles.dark : styles.circle} onClick={value === '' ? null : changeSection}></div>
    </div>
);

export default OnboardingEmailField;
