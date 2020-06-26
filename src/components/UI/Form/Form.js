import React from 'react'
import Input from '../Input/Input'
import Organization from '../Select/Organization/Organization'
import Gender from '../Select/Gender/Gender'
import Professions from '../Select/Professions/Professions'
import Antagonist from '../Radio/Antagonist/Antagonist'
import Origin from '../Select/Origin/Origin'
import Button from '../Button/Button'

import Disadvantages from '../Radio/Check/Disadvantages'
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
            advantages: [],
            disadvantages: [],
        },
        
        advantages: ["Огнестрельная подготовка", "Курсы рукопашного боя", "Боевые рефлексы", "Выброс адреналина", "Крепкий", "Сильный", "Компетентный", "Эрудированный", "Высокий болевой порог", "Здоровый", "Ловкий", "Психопат", "Работник месяца", "Важность", "Исчерпывающий опыт", "Высокая квалификация", "Подготовленный", "Глубинное понимание", "Вторая специальность", "Третий глаз", "Лицензия"],
        disadvantages: ["Адвентизм", "Пацифизм", "Заторможенность", "Апатичность", "Хрупкий", "Слабый", "Некомпетентный", "Глупый", "Низкий болевой порог", "Хилый", "Неуклюжий", "Альтруист", "Предвзятость", "Расходник", "Недостаток опыта", "Низкая квалификация", "Неготовый", "Глубинное непонимание", "Срочный перевод", "Бегство", "Ментальное оглушение", "Специальное постановление"],
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handledisCheck = this.handledisCheck.bind(this);
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
    
        if (this.state.newUser.advantages.indexOf(newSelection) > -1) {
          newSelectionArray = this.state.newUser.advantages.filter(
            s => s !== newSelection
          );
        } else {
          newSelectionArray = [...this.state.newUser.advantages, newSelection];
        }
    
        this.setState(prevState => ({
          newUser: { ...prevState.newUser, advantages: newSelectionArray }
        }));
    }

    handledisCheck(e) {
        const lastSelection = e.target.value;
        let lastSelectionArray;

        if (this.state.newUser.disadvantages.indexOf(lastSelection) > -1) {
            lastSelectionArray = this.state.newUser.disadvantages.filter(
                s => s !== lastSelection
            );
        } else {
            lastSelectionArray = [...this.state.newUser.disadvantages, lastSelection];
        }

        this.setState(prevState => ({
            newUser: { ...prevState.newUser, disadvantages: lastSelectionArray }
        }))
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let userData = this.state.newUser;
        // в to создаем почту и отправляем по ей
        userData.to = 'i_daktes_i@mail.ru'
        userData.body = `
        <table cellpadding="8px">
            <tr>
                <th align="left">Имя:</th>
                <td align="left">${userData.full_name}</td>
            </tr>
            <tr>
                <th align="left">Возраст:</th>
                <td align="left">${userData.age}</td>
            </tr>
            <tr>
                <th align="left">Пол:</th>
                <td align="left">${userData.sex}</td>
            </tr>
            <tr>
                <th align="left">Профессия:</th>
                <td align="left">${userData.profession}</td>
            </tr>
            <tr>
                <th align="left">Организация:</th>
                <td align="left">${userData.organization}</td>
            </tr>
            <tr>
                <th align="left">Антогонист:</th>
                <td align="left">${userData.be_antagonist ? 'Да' : 'Нет'}</td>
            </tr>
            <tr>
                <th align="left">Откуда:</th>
                <td align="left">${userData.origins}</td>
            </tr>
            <tr>
                <th align="left">Преимущества:</th>
                <td align="left">${userData.advantages}</td>
            </tr>
            <tr>
                <th align="left">Недостатки:</th>
                <td align="left">${userData.disadvantages}</td>
            </tr>
        </table>
    `;
        // https://webhook.site/b3049de9-6881-432d-9b36-5dfd8e8dea9f
        // http://localhost:3001/mail/
        fetch('http://localhost:3001/mail/', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        })
        // .then(response => {
        
        // })

        // fetch('https://tduvk.herokuapp.com/api/players/',{
        //     method: "POST",
        //     body: JSON.stringify(userData),
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //   }).then(response => {
        //     response.json().then(data => {
        //       console.log("Successful" + data);
        //     })
        // })
    }

    render() {
        const { full_name, age, sex, profession, organization, be_antagonist, origins, advantages, disadvantages } = this.state.newUser;
        return (
            <div className="main-characer">
                <form onSubmit={this.handleFormSubmit}>
                    <Input
                        value={full_name}
                        type={"text"}
                        title={"Ваше Имя"}
                        name={"full_name"}
                        placeholder={"Ведите Ваше имя"}
                        handleChange={this.handleInput}
                    />
                    <span className="vision">{full_name}</span>
                    <Input
                        value={age}
                        placeholder={"Ваш возраст?"}
                        type={"number"}
                        name={"age"}
                        title={"Ваш возраст"}
                        handleChange={this.handleInput}
                    />
                    <span className="vision">{age}</span>
                    <Gender
                        value={sex}
                        title={"Ваш пол"}
                        name={"sex"}
                        handleChange={this.handleInput}
                        placeholder={"Выберите Ваш пол"}
                    />
                    <span className="vision">{sex}</span>
                    <Professions
                        value={profession}
                        name={"profession"}
                        title={"Профессия"}
                        handleChange={this.handleInput}
                        placeholder={"Выберите Профессию"}
                    />
                    <span className="vision">{profession}</span>
                    <Organization
                        value={organization}
                        title={"Организации"}
                        name={"organization"}
                        handleChange={this.handleInput}
                        placeholder={"Выберите организацию"}
                    />
                    <span className="vision">{organization}</span>
                    <Antagonist
                        type="checkbox"
                        value={be_antagonist}
                        title={"Хочу быть антогонистом"}
                        checked={be_antagonist}
                        name={"be_antagonist"}
                        handleChange={this.handleInput}
                    />
                    <span className="vision">{be_antagonist ? 'Да' : 'Нет'}</span>
                    <Origin
                        value={origins}
                        handleChange={this.handleInput}
                        placeholder={"Откуда ты епта?"}
                        title={"Откуда ты там взялся?"}
                        name={"origins"} 
                    />
                    <span className="vision">{origins}</span>
                    <div className="adv" style={{display:'flex', flexDirection:'row',justifyContent: 'space-between'}}>
                        <Advantage
                            selectedOptions={advantages}
                            title={"Преимущества"}
                            name={"advantages"}
                            options={this.state.advantages}
                            handleChange={this.handleCheck}
                        />
                        <Disadvantages
                            selectedOptions={disadvantages}
                            title={"Недостатки"}
                            name={"disadvantages"}
                            options={this.state.disadvantages}
                            handleChange={this.handledisCheck}
                        />
                    </div>
                    <hr/>
                    <label>Принятие факта, что Ваш персонаж может погибнуть в первые минуты игры</label>

                    <Button value="Submit" onClick={this.handleFormSubmit} title={"Создать"}>Создать</Button>
                </form>
            </div>
        );
    }
    // временно 
    // componentDidUpdate() {
    //     console.log(this.state);
    // }
}

export default Form