import React, {Component} from 'react'
import Input from '../Input/Input'
import Organization from '../Select/Organization/Organization'
import Origin from '../Select/Origin/Origin'
import Gender from '../Select/Gender/Gender'
import Profession from '../Select/Professions/Professions'
import Antagonist from '../Radio/Antagonist/Antagonist'

import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: '',
                Age: '',
                Gender: '',
                Professions: '',
                Organizations: '',
                accept: false,
                Antagonist: '',
                origin: '',
            },
            genderOptions: ["Male", "Female"],
            listOrganization: [
                "Центральное Командование NT (ЦК)", 
                "Нано Трайзен (NT)", 
                "Правительство Солнечной Системы (SolGov)", 
                "Zeng-Hu-Pharmaceuticals", 
                "Второй Красный Квест",
                "Вей Мед",
                "BioTech Solutios",
                "Гибсонский Инженерный союз",
                "Gilthari Exports"
            ],
            quizes: ["Yes", "No"]
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearSubmit = this.handleClearSubmit.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }




    handleFullName(e) {
        console.log("Done!")
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
            {...prevState.newUser, name: value}
            }), () => console.log(this.state.newUser)
        )
    }

    handleAge(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
            {...prevState.newUser, Age: value}
            }), () => console.log(this.state.newUser) 
        )
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;


        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              [name]: value
            }
          }),
          () => console.log(this.state.newUser)
        );
      }

// есть блядские проблемы

    handleChecked(e) {
        let value = e.target.value;
        let type = e.target.type;
        let checked = e.target.checked

        if ( type === 'checkbox') {
            value = checked
        }
    }

    handleFormSubmit(e) {

    }

    handleClearSubmit() {

    }

    // change = (e) => {
    //     let { name, value, type, checked } = e.target

    //     if ( type === 'checkbox') {
    //         value = checked
    //     }

    //     this.setState({ [name]: value })
    // }


    // onSubmit(event) {
    //     // const {name} = event.target;
    //     event.preventDefault();
    //     // this.setState({
    //     //     [name]: value 
    //     // })
    //     console.log(this.props.state);
    // }

    // переделать input name

    render() {
        // const {accept} = this.state
        // const {FirstName, LastName, Gender, Age, Professions, Organizations, accept, antagonist, origin} = this.state
        return (
            <form onSubmit={this.handleFormSubmit}>
                <Input type='text'
                    title = 'First Name'
                    name = 'name'
                    value = {this.state.newUser.name}
                    placeholder = {'Ведите Ваше имя'}
                    handleChange = {this.handleInput}
                />
                <Input type={'number'}
                    name={'age'}
                    title = '13'
                    value={this.state.newUser.Age}
                    placeholder={'Ваш возраст'}
                    handleChange = {this.handleAge}
                />
                <Gender 
                    title = {'Выберите пол'}
                    name = {'Gender'}
                    options = {this.state.genderOptions} 
                    value = {this.state.newUser.Gender}
                    placeholder = {'Выберите пол'}
                    handleChange = {this.handleInput}
                />
                <Profession
                    title={"Выберите профессию"}
                    value={this.state.newUser.Professions}
                    name={"Professions"}
                    handleChange={this.handleInput}

                />
                <Organization 
                    title = {"Организация"}
                    placeholder={"Выберите организацию"}
                    value={this.state.newUser.Organizations}
                    options={this.state.listOrganization}
                    name={"Organizations"}
                    handleChange={this.handleInput}
                />
                <Antagonist
                    title={"Желание быть в данной сессии антагонистом"}
                    name={"Antagonist"}
                    options={this.state.quizes}
                    selectedOptions={this.state.newUser.Antagonist}
                    handleChange={this.handleChecked}
                />
                
                <Origin
                    name="origin"
                    value={origin}
                    label="Происхождение"
                />

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