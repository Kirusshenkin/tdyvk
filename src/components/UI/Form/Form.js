import React from 'react'
// import Input from '../Input/Input'
import Organization from '../Radio/Organization/Organization'
import Select from '../Select/SelectAge/SelectAge'
import SelectProfession from '../Select/SelectProfession/SelectProfession'
import './Form.css'

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
        let {name, value, type, checked} = e.target

        if( type === 'checkbox') {
            value = checked
        }

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
                    <div>
                        <label>Имя</label>
                        <input 
                            name="FirstName"
                            value={FirstName}
                            label="Имя"
                            type="text"
                            onChange={this.change}
                        />
                    </div>
                    <div>
                        <label>Фамилия</label>
                    <input
                        name="LastName"
                        value={LastName}
                        label="Фамилия"
                        type="type"
                        onChange={this.change}
                    />
                    </div>
                </div>
                <Select 
                    label="Пол"
                    value={Gender}
                    onChange={this.change}

                />
                <div>
                    <label>Возраст</label>
                    <input
                        value={Age}
                        name="age" 
                        type="number"
                        label="Возраст"
                        onChange={this.change}

                    />
                </div>
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
    // временно 
    componentDidUpdate() {
        console.log(this.state);
    }
}

export default Form