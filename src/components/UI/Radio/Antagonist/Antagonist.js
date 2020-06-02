import React from 'react'

const antagonist = {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    paddingTop: "0px"
}
// let value = (checkboxValue === "on") ? true : true;

const Antagonist = props => {
    return (
        <div>
            <label>{props.title}</label>
            <div style={antagonist}>
                <input 
                    type="checkbox" 
                    name={props.name}
                    // checked={this.state.newUser.antagonist}
                    onChange={props.handleChange}
                    style={{marginBottom: '0', marginRight: '10px', cursor: 'pointer'}}
                />
                <label htmlFor={props.name} style={{cursor: 'pointer', margin: '0px'}}>Да</label>
            </div>
        </div>
    )
}

export default Antagonist