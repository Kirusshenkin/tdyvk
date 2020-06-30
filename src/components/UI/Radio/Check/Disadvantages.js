import React from "react";
import '../styleCheckbox.css'

const Disadvantages = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <div className="checkbox">
        {props.options.map(option => {
          return (
            <label key={option} className="container-checkbox">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Disadvantages;