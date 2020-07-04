import React from 'react'

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
                {props.professions.map(function(name, k) {
                    return (
                        <optgroup key={k} label={name.name}>
                            {name.professions.map(function(name, i) {
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