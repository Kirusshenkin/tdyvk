import React from 'react'
import ReactTooltip from "react-tooltip";
import '../textarea.css'

const Textareakbm = props => {
    return (
        <div>
            <label htmlFor="kbm" style={{width: '50px'}} data-tip={"Компактный Бионический Модуль"}>{props.label}</label>
            <textarea
                name={props.name}
                id="kbm" 
                cols="10" 
                rows="5"
                onChange={props.onChange}
                value={props.value}
            ></textarea>
            <ReactTooltip place="top" type="dark" effect="solid"/>
        </div>
    )
}

export default Textareakbm