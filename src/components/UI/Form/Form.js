import React from 'react'
import Input from '../Input/Input'
import Organization from '../Select/Organization/Organization'
import Select from '../Select/SelectAge/SelectAge'
import SelectProfession from '../Select/SelectProfession/SelectProfession'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
    super();
    this.state = {

        newUser: {
            name: '',
            age: '',
            Gender: '',
            Professions: '',
            Organizations: '',
            accept: false,
            antagonist: '',
        }
    }
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleInput = this.handleInput.bind(this);
}

    handleAge(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    age: value
                }
            }),
            () => console.log(this.state.newUser)
        )
    }

    handleInput(event) {
        let value = event.target.value;
        let name = event.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }),
            () => console.log(this.state.newUser)
        )
    }

    handleFullName(event) {
        let value = event.target.value
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        )
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    // переделать input name

    render() {
        // const {FirstName, LastName, Gender, Age, Professions, Organizations, accept, antagonist} = this.state

        return (
            <form onSubmit={this.onSubmit}>
                <Input 
                    type={"text"}
                    title={"Ваше Имя"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Ведите Ваше имя"}
                    handleChange={this.handleFullName.bind(this)}
                />
                <Input
                    type={"number"}
                    title={"Ваш пол"}
                    name={"age"}
                    title={"Ваш возраст"}
                    value={this.state.newUser.age}
                    handleChange={this.handleAge.bind(this)}
                />

                {/* <Select 
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
                /> */}
                {/* сделать да или нет */}
                {/* <div className="pick">
                        <input type="radio" name="accept" value="radio" checked={radio === 'accept'} onChange={this.change}/>Согласиться
                        <input type="radio" name=""/>
                </div> */}
                {/* <label>Принятие факта, что Ваш персонаж может погибнуть в первые минуты игры</label>
                <input 
                    type="checkbox" 
                    name="accept" 
                    id="accept"
                    checked={accept} 
                    onChange={this.change}
                />
                <label htmlFor="accept" className="Accept">Да</label>
                <label>Желание быть в данной сессии антагонистом</label>
                <div className="antagonist">
                    <label className="container-radio">Да
                        <input type="radio" name="antagonist" className="agree" value="to-agree" checked={antagonist === 'to-agree'} onChange={this.change}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container-radio">Нет
                        <input type="radio" name="antagonist" className="refuse" value="refuse" checked={antagonist === 'refuse'} onChange={this.change}/>
                        <span className="checkmark"></span>
                    </label>
                </div> */}

                <button value="Submit">Создать</button>
            </form>
        );
    }
    // временно 
    componentDidUpdate() {
        console.log(this.state);
    }
}

export default Form