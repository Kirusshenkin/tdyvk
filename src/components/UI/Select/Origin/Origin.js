import React from 'react'

const Origin = props => {
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <select 
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {props.homeland.map(function(location, k) {
                    return (
                        <option key={k} value={location.location} label={location.location}>
                            {location.location}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Origin