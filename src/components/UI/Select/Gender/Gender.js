// import React from 'react'

// function Genders(props) {
//     const gender = props.gender;
//     const listGenders = gender.map((name, k) =>
//         <option key={k} label={name.name}>
//             {name.name}
//         </option>
//     );
//     return (
//         <select>
//             {listGenders}
//         </select>
//     )
// }

// const gender = [{value:'male', name: 'мужчина'},{value:'female', name: 'женщина'}]

// class Select extends React.Component {

//     state = {
//         gender: ''
//     }

//     change = (event) => {
//         const { name, value } = event.target
//         this.setState({ [name]: value })
//     }

//     render() {
//         return (
//         <div>
//             <label htmlFor={this.props.name}>{this.props.label}</label>
//             <Genders gender={gender} name={gender} value={gender} onChange={this.change}/>
//         </div>
//         )
//     }
// }

// export default Select

import React from 'react'
import './Gender.css'

const Gender = props => {
    return (
        <div>
            <label htmlFor="props.name">{props.title}</label>
            <select
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>   
                {props.options.map(option => {
                    return (
                        <option
                            key={option}
                            value={option}
                            label={option}>{option}</option>
                    );
                })}
            </select>
        </div>
    )
}

export default Gender