import React from "react";
import '../styleCheckbox.css'
import ReactTooltip from "react-tooltip";

const Advantage = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <div className="checkbox">
        {props.options.map(option => {
          return (
            <label key={option.id} data-tip={option.content} className="container-checkbox">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option.id}
                checked={props.selectedOptions.indexOf(option.id) > -1}
                type="checkbox"
              />
              {option.name}
              <ReactTooltip place="top" type="dark" effect="solid"/>
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Advantage;
