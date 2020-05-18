import React from 'react'
import styles from './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [styles.Input]

    if (isInvalid(props)) {
        cls.push(styles.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <input 
                type={inputType}
                value={props.value}
                onChange={props.onChange}
            />

        {
            isInvalid(props)
            ? <span>{props.errorMessage || 'Введите значение'}</span>
            : null
        }
        </div>
    )
}

export default Input