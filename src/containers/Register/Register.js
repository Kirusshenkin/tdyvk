import React, {Component} from 'react'
import './Register.css'
import is from 'is_js'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import {register} from '../../store/actions/register'
import { connect } from 'react-redux'


class Register extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                tounched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            username: {
                value: '',
                type: 'text',
                label: 'Имя пользователя',
                errorMessage: 'Введите Ваше имя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 3
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'пароль',
                errorMessage: 'Введите пароль',
                valid: false,
                tounched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }
    registerHandler = () => {
        this.props.register(
            this.state.formControls.email.value,
            this.state.formControls.username.value,
            this.state.formControls.password.value,
            false
        )
    }
    submitHandler = event => {
        event.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {
            ...this.state.formControls
        }
        const control = {
            ...formControls[controlName]
        }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls,
            isFormValid
        })
    }
    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
              />
            )
        })
    }
    render() {
        return (
            <div className="Register">
                <div className="wrapper">
                    <form className="regBox" onSubmit={this.submitHandler}>
                        <div className="regBox_title">
                            <div className="regBox__Reg-title">Создать учётную запись</div>
                            <div className="reg">
                                { this.renderInputs() }
                            </div>
                            <div style={{display:'flex-inline', justifyContent: 'spaceBetween'}}>
                                <Button
                                    type="success"
                                    onClick={this.registerHandler}
                                    disabled={!this.state.isFormValid}
                                >
                                    Зарегистрироваться
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (email, password, username) => dispatch(register(email, password, username))
    }
}

export default connect(null, mapDispatchToProps)(Register)