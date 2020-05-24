import React from 'react'
import './Form.css'
import Input from '../Input/Input'
import Select from '../Select/SelectAge/SelectAge'
import SelectProfession from '../Select/SelectProfession/SelectProfession'
import Organization from '../Radio/Organization/Organization'

class Form extends React.Component {
    state = {
        FirstName: '',
        LastName: '',
        Gender: '',
        Age: '',
        Professions: '',
        Organizations: '',
    }

    change = (e) => {
        let {name, value} = e.target
        this.setState({ [name]: value })
    }

    // onSubmit(event) {
    //     const {name} = event.target;
    //     event.preventDefault();
    //     // this.setState({
    //     //     [name]: value 
    //     // })
    //     console.log(name);
    // }

    // переделать input name

    render() {
        const {FirstName, LastName, Gender, Age, Professions, Organizations} = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <div className="name">
                    <Input 
                        name="FirstName"
                        value={FirstName}
                        label="Имя"
                        type="text"
                        onChange={this.change}
                    />
                    <Input
                        name="LastName"
                        value={LastName}
                        label="Фамилия"
                        type="type"
                        onChange={this.change}
                    />
                </div>
                <Select 
                    label="Пол"
                    value={Gender}
                    onChange={this.change}

                />
                <Input
                    value={Age}
                    name="age" 
                    type="number" 
                    label="Возраст"
                    onChange={this.change}

                />
                <SelectProfession
                    value={Professions}
                    name="Professions"
                    label="Профессии"
                    onChange={this.change}
                />
                <Organization 
                    label="Организация"
                    value={Organizations}
                    name="Organizations"
                    onChange={this.change}
                />
                <button value="Submit">Отправить</button>
            </form>
        );
    }
    componentDidUpdate() {
        console.log(this.state);
    }
}

export default Form