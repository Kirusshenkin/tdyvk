import React from 'react'
import './SelectAge.css'

function Genders(props) {
    const gender = props.gender;
    const listGenders = gender.map((name, k) =>
        <option key={k} label={name.name}>
            {name.name}
        </option>
    );
    return (
        <select>
            {listGenders}
        </select>
    )
}

const gender = [
    {value:'male', name: 'мужчина'},
    {value:'female', name: 'женщина'}
]

class Select extends React.Component {

    state = {
        gender: ''
    }

    change = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
        <div>
            <label>{this.props.label}</label>
            <Genders gender={gender} name={gender} value={gender} onChange={this.change}/>
        </div>
        )
    }
}

export default Select