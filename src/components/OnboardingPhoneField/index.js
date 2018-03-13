import React from 'react';
import styles from './styles.css';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const OnboardingPhoneField = ({ onChange, text, type, value, setUserObject }) => (
    <div className={styles.base}>
        <ValidatorForm onSubmit={() => {}} debounceTime={1000}>
            <TextValidator
                onChange={(e) => onChange({phone: e.target.value, error: false})}
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
                name="phone"
                validators={['required']}
                errorMessages={['this field is required']}
                onKeyPress={e => {
                    if ((e.key === 'Enter') && (value !== '')) {
                        setUserObject()
                    }
                }}
            />
        </ValidatorForm>
        <div className={value === '' ? styles.dark : styles.circle} onClick={value === '' ? null : setUserObject}></div>
    </div>
);

export default OnboardingPhoneField;
