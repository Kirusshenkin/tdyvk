import React, { Fragment } from 'react'
import Input from '../Input/Input'
import Organization from '../Select/Organization/Organization'
import Gender from '../Select/Gender/Gender'
import Professions from '../Select/Professions/Professions'
import Antagonist from '../Radio/Antagonist/Antagonist'
import Origin from '../Select/Origin/Origin'

// import Disadvantages from '../Radio/Check/Disadvantages'
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
            // advantages: [],
            // disadvantages: [],
            // showData: {
            //     full_name: '',
            //     sex: '',
            //     age: '',
            //     profession: '',
            //     organization: '',
            //     be_antagonist: false,
            //     origins: '',
            //     skills: []
            // }
        },
        

        skillOptions: ["rogramming", "Development", "Design", "Testing"],
        // disadvantages: ["majer", "test", "alis"]
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
            response.json().then(data => {
                // this.setState({
                //     userData
                // })
              console.log("Successful" + data);
            })
        })
        // const { full_name, age, sex, profession, organization, be_antagonist, origins, skills} = this.state.newUser;
        // this.setState({
        //     full_name: '',
        //     age: '',
        //     sex: '',
        //     profession: '',
        //     organization: '',
        //     be_antagonist: false,
        //     origins: '',
        //     skills: [],
        //     showData: {
        //         name :full_name,
        //         age: age,
        //         sex: sex,
        //         profession: profession,
        //         organization: organization,
        //         antagonist: be_antagonist,
        //         origins: origins,
        //         skills: skills
        //     }
        // })
    }

    // handleShow = (event) => {
    //     event.preventDefault()

    // }

    render() {
        const { full_name, age, sex, profession, organization, be_antagonist, origins, skills } = this.state.newUser;
        return (
            <Fragment>
                <form onSubmit={this.handleFormSubmit}>
                    <Input
                        value={full_name}
                        type={"text"}
                        title={"Ваше Имя"}
                        name={"full_name"}
                        placeholder={"Ведите Ваше имя"}
                        handleChange={this.handleInput}
                    />  
                    <Input
                        value={age}
                        placeholder={"Ваш возраст?"}
                        type={"number"}
                        name={"age"}
                        title={"Ваш возраст"}
                        handleChange={this.handleInput}
                    />
                    <Gender
                        value={sex}
                        title={"Ваш пол"}
                        name={"sex"}
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
                        value={be_antagonist}
                        title={"Желание быть в данной сессии антагонистом?"}
                        checked={be_antagonist}
                        name={"be_antagonist"}
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
                        selectedOptions={skills}
                        title={"Преимущества"}
                        name={"skills"}
                        options={this.state.skillOptions}
                        handleChange={this.handleCheck}
                />
                    <label>Принятие факта, что Ваш персонаж может погибнуть в первые минуты игры</label>

                    <button value="Submit" onClick={this.handleFormSubmit}>Создать</button>
                </form>
                <div>
                    <p><strong>Имя -</strong>{full_name}</p>
                    <p><strong>Возраст -</strong>{age}</p>
                    <p><strong>Пол -</strong>{sex}</p>
                    <p><strong>Профессия -</strong>{profession}</p>
                    <p><strong>Организация -</strong>{organization}</p>
                    <p><strong></strong>{origins}</p>
                </div>
            </Fragment>
        );
    }
    // временно 
    componentDidUpdate() {
        console.log(this.state);
    }
}

export default Form