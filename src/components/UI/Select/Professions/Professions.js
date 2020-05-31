import React from 'react'
import './Professions.css'

const Profession = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <select 
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {props.options.map(function(title, k) {
                    return (
                        <optgroup key={k} label={title.name}>
                            {props.options.map(function(name, i) {
                                return (
                                    <option key={i} value={name.name} label={name.name}>
                                        {name.name}
                                    </option>
                                )
                            })}
                        </optgroup>
                    )
                })}
            </select>
        </div>
    )
}

export default Profession