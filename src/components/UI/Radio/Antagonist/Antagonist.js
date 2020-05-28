import React from 'react'

const Antagonist = (props) => {
    
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <div className="antagonist-main" style={{display: 'block'}}>
                {props.options.map(option => {
                    return (
                        <label key={option}>
                            <input
                                id={props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option}
                                type="checkbox"
                                style={{height: '13px'}}

                            />
                            {option}
                        </label>
                    );
                })}
            </div>
        </div>
    )
}

export default Antagonist