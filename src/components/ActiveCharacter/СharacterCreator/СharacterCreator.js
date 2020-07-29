import React, {Component} from "react";
import Http from '../../../hoc/Http/Http'

import './СharacterCreator.css'
import Input from '../../UI/Input/Input'
import Organization from '../../UI/Select/Organization/Organization'
import Gender from '../../UI/Select/Gender/Gender'
import Professions from '../../UI/Select/Professions/Professions'
import Antagonist from '../../UI/Radio/Antagonist/Antagonist'
import Origin from '../../UI/Select/Origin/Origin'
import Button from '../../UI/Button/Button'
import Loader from '../../UI/Loader/Loader'

import Textarea from '../../UI/Textarea/textarea'
import Textareakbm from '../../UI/Textarea/KBM/KBM'

import Disadvantages from '../../UI/Radio/Check/Disadvantages'
import Advantage from '../../UI/Radio/Check/Advantage'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import '../../UI/Select/Select.css'

class СharacterCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        isButtonDisabled: false,
        newUser: {
            name_profile: '',
            full_name: '',
            sex: '',
            age: '',
            profession: '',
            organization: '',
            be_antagonist: false,
            origins: '',
            advantages: [],
            disadvantages: [],
            appearance:'',
            kbm: '',
        },
        organizations:[],
        professions: [],
        advantages: [],
        disadvantages: [],
        homeland:[]
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handledisCheck = this.handledisCheck.bind(this);
}
    // это redux
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
    // это redux
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
    // это redux
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
    async componentDidMount () {
        await Http.get('api/organization').then((response) => { 
            response.json().then(data => {
                this.setState({
                    isLoaded: true,
                    organizations: data.data 
                })
            })
        })
        await Http.get('api/profession').then((response) => { 
            response.json().then(data => {
                this.setState({ professions: data.data })
            })
        })
        // console.log('Http', Http)
        await Http.get('api/homeland').then((response) => { 
            response.json().then(data => { 
                this.setState({ homeland: data.data })
            })
        })
        await Http.get('api/advantages').then((response) => { 
            response.json().then(data => {
                this.setState({ advantages: data.data })
            })
        })
        await Http.get('api/disadvantages').then((response) => { 
            response.json().then(data => { 
                this.setState({ disadvantages: data.data })
            })
        })
        this.setState({loading: false})
    }
    // это redux
    handleFormSubmit(event) {
        event.preventDefault();

        // let userData = this.state.newUser;
        Http.post('api/characters').then((response) => {
            response.json().then(data => {
                this.setState({
                    isButtonDisabled: true,
                    userData: data.data
                })
            })
        })
        // в to создаем почту и отправляем по ей

    //     userData.body = `
    //     <table cellpadding="8px">
    //         <tr>
    //             <th align="left">Имя пользовотеля:</th>
    //             <td align="left">${userData.name_profile}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Имя:</th>
    //             <td align="left">${userData.full_name}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Возраст:</th>
    //             <td align="left">${userData.age}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Пол:</th>
    //             <td align="left">${userData.sex}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Профессия:</th>
    //             <td align="left">${userData.profession}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Организация:</th>
    //             <td align="left">${userData.organization}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Антогонист:</th>
    //             <td align="left">${userData.be_antagonist ? 'Да' : 'Нет'}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Откуда:</th>
    //             <td align="left">${userData.origins}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Преимущества:</th>
    //             <td align="left">${userData.advantages}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Недостатки:</th>
    //             <td align="left">${userData.disadvantages}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">Параметры внешности:</th>
    //             <td align="left">${userData.appearance}</td>
    //         </tr>
    //         <tr>
    //             <th align="left">КБМ:</th>
    //             <td align="left">${userData.kbm}</td>
    //         </tr>
    //     </table>
    // `;
        // https://webhook.site/b3049de9-6881-432d-9b36-5dfd8e8dea9f
        // http://localhost:3001/mail/

        // setTimeout(() => {
        //     fetch('https://tdyvkback.herokuapp.com/mail/', {
        //         method: "POST",
        //         body: JSON.stringify(userData),
        //         headers: {
        //           'Accept': 'application/json',
        //           'Content-Type': 'application/json'
        //         },
        //     }).then(response => {
        //         response.json().then(data => {
        //             alert('Поздравляю Вы создали персонажа!')
        //         })
        //     })
        // }, 2000)
    }


  render() {
    if (this.state.loading) 
    return <Loader/> 
    const { name_profile, full_name, age, sex, profession, organization, be_antagonist, origins, advantages, disadvantages, appearance, kbm } = this.state.newUser;

    return (
      <div className="СharacterCreator">
          <Container>
            <Row>
              <Col>
                <div className="first-character">
                <div className="main-characer">
                <form onSubmit={this.handleFormSubmit}>
                    <Input
                        value={name_profile}
                        type={"text"}
                        label={"Ваш Никнейм"}
                        name={"name_profile"}
                        placeholder={"Ведите Ваш никнейм"}
                        onChange={this.handleInput}
                    />
                    <span className="vision">{name_profile}</span>
                    <Input
                        value={full_name}
                        type={"text"}
                        label={"Имя персонажа"}
                        name={"full_name"}
                        placeholder={"Ведите Ваше имя"}
                        onChange={this.handleInput}
                    />
                    <span className="vision">{full_name}</span>
                    <Input
                        value={age}
                        placeholder={"Ваш возраст?"}
                        type={"number"}
                        name={"age"}
                        label={"Возраст персонажа"}
                        onChange={this.handleInput}
                    />
                    <span className="vision">{age}</span>
                    <Gender
                        value={sex}
                        title={"Пол персонажа"}
                        name={"sex"}
                        handleChange={this.handleInput}
                        placeholder={"Выберите Ваш пол"}
                    />
                    <span className="vision">{sex}</span>
                    <Professions
                        value={profession}
                        name={"profession"}
                        title={"Профессия"}
                        professions={this.state.professions}
                        handleChange={this.handleInput}
                        placeholder={"Выберите Профессию"}
                    />
                    <span className="vision">{profession}</span>
                    <Organization
                        value={organization}
                        title={"Организации"}
                        name={"organization"}
                        organizations={this.state.organizations}
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
                        homeland={this.state.homeland}
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
                    <Textarea
                        label="Параметры внешности"
                        onChange={this.handleInput}
                        name={"appearance"}
                        value={appearance}
                    />
                    <Textareakbm
                        label="КБМ"
                        onChange={this.handleInput}
                        name={"kbm"}
                        value={kbm}
                    />
                    <hr/>
                    <label>Принятие факта, что Ваш персонаж может погибнуть в первые минуты игры</label>

                    <Button value="Submit" onClick={() => this.handleFormSubmit} label={"Создать"} disabled={this.state.isButtonDisabled} type="success">Создать</Button>
                    {/* <Link to={"/Сharacter"}>
                        <a>Посмотреть</a>
                    </Link> */}
                    
                </form>
                </div>
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
  // временно 
  componentDidUpdate() {
    console.log(this.state);
  }
}

export default СharacterCreator;