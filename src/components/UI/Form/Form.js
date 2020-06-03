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
            skills2: [],
        },
        
        OptionGender:[{name: 'Мужчина'}, {name: 'Женщина'}],
        ListOrganization: [
            {name: 'Центральное Командование NT (ЦК)'},
            {name: 'Нано Трайзен (NT)'},
            {name: 'Правительство Солнечной Системы (SolGov)'},
            {name: 'Zeng-Hu-Pharmaceuticals'},
            {name: 'Второй Красный Квест'},
            {name: 'Вей Мед'},
            {name: 'BioTech Solutios'},
            {name: 'Гибсонский Инженерный союз'},
            {name: 'Gilthari Exports'}
        ],
        ListProfession: [{
            name: 'Управление',
            professions: [{
                value: 'Капитан',
                name: 'Капитан'
            }, {
                value: 'Глава Персонала',
                name: 'Глава Персонала'
            }, {
                value: 'Главый Инженер',
                name: 'Главый Инженер'
            }, {
                value: 'Директор Отдела Исследования',
                name: 'Директор Отдела Исследования'
            }, {
                value: 'Агент Внутренних Дел',
                name: 'Агент Внутренних Дел'
            }]
        }, {
            name: 'Служба Безопасности',
            professions: [{
                value: 'Смотритель',
                name: 'Смотритель'
            }, {
                value: 'Детектив',
                name: 'Детектив'
            }, {
                value: 'Офицер СБ',
                name: 'Офицер СБ'
            }, {
                value: 'Криминалист',
                name: 'Криминалист'
            }, {
                value: 'Кадет СБ',
                name: 'Кадет СБ'
            }, {
                value: 'Агент Внутренних Дел',
                name: 'Агент Внутренних Дел'
            }]
        }, {
            name: 'Научные сотрудники',
            professions: [{
                value: 'Учёный',
                name: 'Учёный'
            }, {
                value: 'Робототехник',
                name: 'Робототехник'
            }, {
                value: 'Ксеноархеолог',
                name: 'Ксеноархеолог'
            }, {
                value: 'Ксенобиолог',
                name: 'Ксенобиолог'
            }, {
                value: 'Лаборант',
                name: 'Лаборант'
            }]
        }, {
            name: 'Медицинский персонал',
            professions: [{
                value: 'Генетик',
                name: 'Генетик'
            }, {
                value: 'Врач',
                name: 'Врач'
            }, {
                value: 'Химик',
                name: 'Химик'
            }, {
                value: 'Вирусолог',
                name: 'Вирусолог'
            }, {
                value: 'Интерн',
                name: 'Интерн'
            }, {
                value: 'Психиатр',
                name: 'Психиатр'
            }]
        }, {
            name: 'Техническое обсуживание',
            professions: [{
                value: 'Инженер',
                name: 'Инженер'
            }, {
                value: 'Атмосферный техник',
                name: 'Атмосферный техник'
            }, {
                value: 'Технический ассистент',
                name: 'Технический ассистент'
            }]
        }, {
            name: 'Доставка и снабжение',
            professions: [{
                value: 'Квартирмейстер',
                name: 'Квартирмейстер'
            }, {
                value: 'Грузчик',
                name: 'Грузчик'
            }, {
                value: 'Шахтёр',
                name: 'Шахтёр'
            }, {
                value: 'Переработчик',
                name: 'Переработчик'
            }]
        }, {
            name: 'Гражданский персонал',
            professions: [{
                value: 'Бармен',
                name: 'Бармен'
            }, {
                value: 'Повар',
                name: 'Повар'
            }, {
                value: 'Ботаник',
                name: 'Ботаник'
            }, {
                value: 'Уборщик',
                name: 'Уборщик'
            }, {
                value: 'Библиотекарь',
                name: 'Библиотекарь'
            }, {
                value: 'Священник',
                name: 'Священник'
            }, {
                value: 'Ассистент',
                name: 'Ассистент'
            }, {
                value: 'Мим',
                name: 'Мим'
            }, {
                value: 'Клоун',
                name: 'Клоун'
            }]
        }, {
            name: 'Синтетический разум',
            professions: [{
                value: 'Искусственный интеллект',
                name: 'Искусственный интеллект'
            }, {
                value: 'Киборг',
                name: 'Киборг'
            }, {
                value: 'Персональный ИИ',
                name: 'Персональный ИИ'
            }]
        }],
        ListOrigin: [
            {name: 'Земля'},
            {name: 'Венера'},
            {name: 'Бимпа'},
            {name: 'Новый Гобсон'},
            {name: 'Рожденный на КС'}
        ],
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

        return (
            <form onSubmit={this.handleFormSubmit}>
                <Input 
                    type={"text"}
                    title={"Ваше Имя"}
                    name={"full_name"}
                    value={this.state.newUser.full_name}
                    placeholder={"Ведите Ваше имя"}
                    handleChange={this.handleInput}
                />  
                <Input
                    placeholder={"Видите задницу?"}
                    type={"number"}
                    name={"age"}
                    title={"Ваш возраст"}
                    value={this.state.newUser.age}
                    handleChange={this.handleInput}
                />

                 <Gender
                    options={this.state.OptionGender} 
                    title={"Ваш пол"}
                    name={"sex"}
                    value={this.state.newUser.sex}
                    handleChange={this.handleInput}
                    placeholder={"Выберите Ваш пол"}
                />
                <Professions
                    options={this.state.ListProfession}
                    value={this.state.newUser.profession}
                    name={"profession"}
                    title={"Профессия"}
                    handleChange={this.handleInput}
                    placeholder={"Выберите Профессию"}
                />
                <Organization
                    options={this.state.ListOrganization}
                    value={this.state.newUser.organization}
                    title={"Организации"}
                    name={"organization"}
                    handleChange={this.handleInput}
                    placeholder={"Выберите организацию"}
                />
                <Antagonist
                    title={"Желание быть в данной сессии антагонистом?"}
                    checked={this.state.newUser.be_antagonist}
                    name={"be_antagonist"}
                    value={this.state.newUser.antagonist}
                    handleChange={this.handleInput}
                />
                <Origin
                    options={this.state.ListOrigin}
                    value={this.state.newUser.origins}
                    handleChange={this.handleInput}
                    placeholder={"Откуда ты епта?"}
                    title={"Откуда ты там взялся?"}
                    name={"origins"} 
                />
                <Advantage
                    title={"Преимущества"}
                    name={"skills"}
                    options={this.state.skillOptions}
                    selectedOptions={this.state.newUser.skills}
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