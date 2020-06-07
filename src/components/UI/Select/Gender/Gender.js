import React from 'react'

const Gender = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <select 
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {OptionGender.map(function(option, k) {
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

const OptionGender = [{name: 'Мужчина'}, {name: 'Женщина'}]

export default Gender