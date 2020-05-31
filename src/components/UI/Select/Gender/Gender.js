import React from 'react'
import './Gender.css'

const Gender = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <select 
                name={"gender"}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {props.options.map(function(option, k) {
                    return (
                        <option key={k} label={option.name} value={option.name}>
                            {option.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Gender