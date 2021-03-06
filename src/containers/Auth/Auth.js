import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import './Auth.css'
import is from 'is_js'
import {auth} from '../../store/actions/auth'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'


class Auth extends Component {
    state = {
        redirectToReferrer: false,
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
    
      loginHandler = () => {
        this.props.auth(
          this.state.formControls.email.value,
          this.state.formControls.password.value,
          true
        ).then((resp) => {
          this.props.history.push('/Сharacter')
        })
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
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }
    
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
    
        formControls[controlName] = control
    
        let isFormValid = true
    
        Object.keys(formControls).forEach(name => {
          isFormValid = formControls[name].valid && isFormValid
        })
    
        this.setState({
          formControls, isFormValid
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
      if(this.props.token) {
        return <Redirect to="/Сharacter"/>
      }
      return (
        <div className="blockAuth">
          <div className="Auth">
              <div className="wrapper">
                  <form className="authBox" onSubmit={this.submitHandler}>
                      <div className="authBox__title">
                          <div className="authBox__Auth-title">Авторизация</div>
                          <div className="authBox__Auth-welcome">Добро пожаловать</div>
                          {this.props.error ? <span className="Messange-error">{this.props.error}</span> : <span></span>}
                      </div>
                      <div className="auth">
                          { this.renderInputs() }
                      </div>
                      <div style={{display:'flex-inline', justifyContent: 'spaceBetween'}}>
                      <Button
                          type="success"
                          onClick={this.loginHandler}
                          disabled={!this.state.isFormValid}
                      >
                      Войти
                      </Button>
                        <Link to="/Register">Хотите зарегистрироваться?</Link>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
      error: state.auth.error,
      auth: state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password) => dispatch(auth(email, password))
    }
}
// export default Auth
export default connect(mapStateToProps, mapDispatchToProps)(Auth)