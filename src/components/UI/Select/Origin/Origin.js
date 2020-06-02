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
                {props.options.map(function(item, k) {
                    return (
                        <option key={k} value={item.name} label={item.name}>
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Origin