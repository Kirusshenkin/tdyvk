import React from 'react'
import './Button.css'

const Button = props => {
    // const cls = [
    //     classes.Button,
    //     classes[props.type]
    // ]

    return(
        <button
            className="Button"
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.title}
        </button>
    )
}

export default Button;