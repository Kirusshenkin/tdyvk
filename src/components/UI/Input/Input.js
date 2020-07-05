import React from 'react'
import styles from './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const style = [styles.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        style.push(styles.invalid)
    }
    return (
        <div className={style.join(' ')}>
            <label htmlFor={htmlFor}>
                {props.title}
            </label>
            <input 
                type={inputType}
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={props.handleChange}
            />
    {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Введите верное значение'}</span>
          : null
    }
        </div>
    )
}

export default Input