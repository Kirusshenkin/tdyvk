import React from 'react'
// import classes from './Input.css'

const Input = (props) => {
    //   console.log(props.value);
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <input 
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input