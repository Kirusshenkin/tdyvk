import React from 'react'
import Input from '../Input/Input'
import Organization from '../Select/Organization/Organization'
import Gender from '../Select/Gender/Gender'
import Professions from '../Select/Professions/Professions'
import Antagonist from '../Radio/Antagonist/Antagonist'
import Origin from '../Select/Origin/Origin'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        newUser: {
            name: '',
            age: '',
            gender: '',
            professions: '',
            organizations: '',
            antagonist: false,
            origin: ''
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
        ]
    }
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleProfession = this.handleProfession.bind(this);
    this.handleOrganization = this.handleOrganization.bind(this);
    this.handleAntagonist = this.handleAntagonist.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}



    handleInput(event) {
        let value = event.target.value;
        let name = event.target.name;
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

    handleGender(event) {
        let value = event.target.value
        this.setState(
            prevState => ({
                ...prevState.newUser,
                gender: value
            }),
            () => console.log(this.state.newUser)
        )
    }

    handleProfession(event) {
        let value = event.target.value
        this.setState(
            prevState => ({
                newUser: {
                    professions: value
                }
            }),
            () => console.log(this.state.newUser)
        )
    }

    handleOrganization(event) {
        let value = event.target.value
        this.setState(
            prevState => ({
                newUser: {
                    organizations: value
                }
            }),
            () => console.log(this.state.newUser)
        )
    }

    handleAntagonist(event) {
        let value = event.target.value
        this.setState(
            prevState => ({
                newUser: {
                    antagonist: value
                }
            }),
            () => console.log(this.state.newUser)
        )
    }

    handleOrigin(event) {
        let value = event.target.value
        this.setState(
            prevState => ({
                newUser: {
                    origin: value
                }
            }),
            () => console.log(this.state.newUser)
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;
     
        fetch('https://tduvk.herokuapp.com/api/players/?format=json',{
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
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Ведите Ваше имя"}
                    handleChange={this.handleFullName}
                />
                <Input
                    placeholder={"Видите задницу?"}
                    type={"number"}
                    name={"age"}
                    title={"Ваш возраст"}
                    value={this.state.newUser.age}
                    handleChange={this.handleAge}
                />

                 <Gender
                    options={this.state.OptionGender} 
                    title={"Ваш пол"}
                    name={"gender"}
                    value={this.state.newUser.gender}
                    handleChange={this.handleInput}
                    placeholder={"Выберите Ваш пол"}
                />
                <Professions
                    options={this.state.ListProfession}
                    value={this.state.newUser.professions}
                    name={"professions"}
                    title={"Профессия"}
                    handleChange={this.handleProfession}
                    placeholder={"Выберите Профессию"}
                />
                <Organization
                    options={this.state.ListOrganization}
                    value={this.state.newUser.organizations}
                    title={"Организации"}
                    name={"organizations"}
                    handleChange={this.handleInput}
                    placeholder={"Выберите организацию"}
                />
                <Antagonist
                    title={"Желание быть в данной сессии антагонистом?"}
                    name={"antagonist"}
                    value={this.state.newUser.antagonist}
                    handleChange={this.handleInput}
                />
                <Origin
                    options={this.state.ListOrigin}
                    value={this.state.newUser.origin}
                    handleChange={this.handleInput}
                    placeholder={"Откуда ты епта?"}
                    title={"Откуда ты там взялся?"}
                    name={"origin"} 
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