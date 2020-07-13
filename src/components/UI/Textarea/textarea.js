import React from 'react'
import './textarea.css'

const Textarea = props => {
    return (
        <div>
            <label htmlFor="appearance">{props.label}</label>
            <textarea 
                name={props.name}
                id="appearance" 
                cols="10" 
                rows="5"
                onChange={props.onChange}
                value={props.value}
            ></textarea>
        </div>
    )
}

export default Textarea