import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import './Auth.css'

class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }
    render() {
        return (
            <div className="wrapper">
                <form className="authBox">
                    <div className="authBox__title">
                        <div className="authBox__Authtitle">Sign up</div>
                        <div className="authBox__Authwelcome">Welcome in anus</div>
                    </div>
                    <div className="auth">
                        <Input
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Auth