import React from 'react'

const Organization = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <select 
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {props.organizations.map(function(name, k) {
                    return (
                        <option key={k} label={name.name} value={name.id}>
                            {name.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Organization