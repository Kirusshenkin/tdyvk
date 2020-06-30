import React from 'react'
import './Input.css'

const Input = props => {
    return (
        <div>
            <label htmlFor={props.name}>
                {props.title}
            </label>
            <input type={props.type}
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input