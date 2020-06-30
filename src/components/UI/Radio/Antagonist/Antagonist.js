import React from 'react'
import '../styleCheckbox.css'

// const antagonist = {
//     flexDirection: "row",
//     display: "flex",
//     alignItems: "center",
//     paddingTop: "0px"
// }
// let value = (checkboxValue === "on") ? true : true;

const Antagonist = props => {
    return (
        <div>
            <label className="container-checkbox">{props.title}
            {/* <div style={antagonist}> */}
                <input 
                    type="checkbox" 
                    name={props.name}

                    // checked={this.state.newUser.antagonist}
                    onChange={props.handleChange}
                    style={{marginBottom: '0', marginRight: '10px', cursor: 'pointer'}}
                />
                <span className="checkmark"></span>
                {/* <label htmlFor={props.name} style={{cursor: 'pointer', margin: '0px'}}>Да</label> */}
            {/* </div> */}
            </label>
        </div>
    )
}

export default Antagonist