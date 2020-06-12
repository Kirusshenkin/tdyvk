import React from 'react'
import Input from '../Input/Input'
import Organization from '../Select/Organization/Organization'
import Gender from '../Select/Gender/Gender'
import Professions from '../Select/Professions/Professions'
import Antagonist from '../Radio/Antagonist/Antagonist'
import Origin from '../Select/Origin/Origin'
import Advantage from '../Radio/Check/Advantage'

import './Form.css'

class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        newUser: {
            full_name: '',
            sex: '',
            age: '',
            profession: '',
            organization: '',
            be_antagonist: false,
            origins: '',
            skills: [],
        },
        

        skillOptions: ["rogramming", "Development", "Design", "Testing"]
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
}

    handleInput(e) {
        let {name, value, type, checked} = e.target
        if (type === 'checkbox') {
            value = checked
        }

        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            })
        )
    }
    
    handleCheck(e) {
        const newSelection = e.target.value;
        let newSelectionArray;
    
        if (this.state.newUser.skills.indexOf(newSelection) > -1) {
          newSelectionArray = this.state.newUser.skills.filter(
            s => s !== newSelection
          );
        } else {
          newSelectionArray = [...this.state.newUser.skills, newSelection];
        }
    
        this.setState(prevState => ({
          newUser: { ...prevState.newUser, skills: newSelectionArray }
        }));
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let userData = this.state.newUser;
     
        fetch('https://tduvk.herokuapp.com/api/players/',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(response => {
            response.json().then(data =>{
              console.log("Successful" + data);
            })
        })
    }

    render() {
        const {full_name, age, sex, profession, organization, be_antagonist, origins, skills} = this.state.newUser
        return (
            <form onSubmit={this.handleFormSubmit}>
                <Input 
                    type={"text"}
                    title={"Ваше Имя"}
                    name={"full_name"}
                    value={full_name}
                    placeholder={"Ведите Ваше имя"}
                    handleChange={this.handleInput}
                />  
                <Input
                    placeholder={"Видите задницу?"}
                    type={"number"}
                    name={"age"}
                    title={"Ваш возраст"}
                    value={age}
                    handleChange={this.handleInput}
                />

                 <Gender
                    title={"Ваш пол"}
                    name={"sex"}
                    value={sex}
                    handleChange={this.handleInput}
                    placeholder={"Выберите Ваш пол"}
                />
                <Professions
                    value={profession}
                    name={"profession"}
                    title={"Профессия"}
                    handleChange={this.handleInput}
                    placeholder={"Выберите Профессию"}
                />
                <Organization
                    value={organization}
                    title={"Организации"}
                    name={"organization"}
                    handleChange={this.handleInput}
                    placeholder={"Выберите организацию"}
                />
                <Antagonist
                    title={"Желание быть в данной сессии антагонистом?"}
                    checked={be_antagonist}
                    name={"be_antagonist"}
                    value={be_antagonist}
                    handleChange={this.handleInput}
                />
                <Origin
                    value={origins}
                    handleChange={this.handleInput}
                    placeholder={"Откуда ты епта?"}
                    title={"Откуда ты там взялся?"}
                    name={"origins"} 
                />
                <Advantage
                    title={"Преимущества"}
                    name={"skills"}
                    options={this.state.skillOptions}
                    selectedOptions={skills}
                    handleChange={this.handleCheck}
                />
                {/* <label>Принятие факта, что Ваш персонаж может погибнуть в первые минуты игры</label>*/}

                <button value="Submit" action={this.handleFormSubmit}>Создать</button>
            </form>
        );
    }
    // временно 
    componentDidUpdate() {
        console.log(this.state);
    }
}

export default Form