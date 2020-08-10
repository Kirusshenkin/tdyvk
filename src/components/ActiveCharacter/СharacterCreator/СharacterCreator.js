import React, {Component} from "react";
import Http from '../../../hoc/Http/Http'
import { Link } from 'react-router-dom'

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
            name: '',
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
        const newSelection = parseInt(e.target.value);
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
        const lastSelection = parseInt(e.target.value);
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
                this.setState({ organizations: data.data })
            })
        })
        await Http.get('api/profession').then((response) => { 
            response.json().then(data => {
                this.setState({ professions: data.data })
            })
        })
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
        this.setState({isButtonDisabled: true})
        let CharacterData = this.state.newUser
        Http.post('api/characters', CharacterData).then((response) => {
            response.json().then(data => {
                this.setState({
                    userData: data.data
                })
            })
        })
    }


  render() {
    if (this.state.loading)
    return <div className="СharacterCreator"><Loader/></div>
    const {  name, age, sex, profession, organization, be_antagonist, origins, advantages, disadvantages, appearance, kbm } = this.state.newUser;
    return (
      <div className="СharacterCreator">
          <Container>
            <Row>
              <Col>
                <div className="first-character">
                    <div className="main-characer">
                    <strong style={{color:'#d63434'}}>Прошу проверять все поля ввода *Если хоть одно поля будет не введино, то ваш персонаж не будет создан*</strong>

                        <form onSubmit={this.handleFormSubmit}>
                        <Link to={"/Description"} className="descriptionlnk">Справочник*</Link>
                            <Input
                                value={name}
                                type={"text"}
                                label={"Имя персонажа"}
                                name={"name"}
                                placeholder={"Ведите Ваше имя"}
                                onChange={this.handleInput}
                            />
                            <Input
                                value={age}
                                placeholder={"Ваш возраст?"}
                                type={"number"}
                                name={"age"}
                                label={"Возраст персонажа"}
                                onChange={this.handleInput}
                            />
                            <Gender
                                value={sex}
                                title={"Пол персонажа"}
                                name={"sex"}
                                handleChange={this.handleInput}
                                placeholder={"Выберите Ваш пол"}
                            />
                            <Professions
                                value={profession}
                                name={"profession"}
                                title={"Профессия"}
                                professions={this.state.professions}
                                handleChange={this.handleInput}
                                placeholder={"Выберите Профессию"}
                            />
                            <Organization
                                value={organization}
                                title={"Организации"}
                                name={"organization"}
                                organizations={this.state.organizations}
                                handleChange={this.handleInput}
                                placeholder={"Выберите организацию"}
                            />
                            <Antagonist
                                type="checkbox"
                                value={be_antagonist}
                                title={"Хочу быть антогонистом"}
                                checked={be_antagonist}
                                name={"be_antagonist"}
                                handleChange={this.handleInput}
                            />
                            <Origin
                                value={origins}
                                handleChange={this.handleInput}
                                placeholder={"Откуда ты епта?"}
                                title={"Откуда ты там взялся?"}
                                homeland={this.state.homeland}
                                name={"origins"}
                            />
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
                            <div className="btns">
                            <Button 
                                value="Submit" 
                                onClick={() => this.handleFormSubmit} 
                                label={"Создать"} 
                                disabled={this.state.isButtonDisabled} 
                                type="success"
                            >
                                Создать
                            </Button>
                            <Button 
                                type="success"
                            >
                                <Link to={"/Сharacter"} className="btn-link__character">
                                    Посмотреть
                                </Link>
                            </Button>
                            </div>
                            <small>После создание персонажа, Вам надо будет нажать на кнопку "Посмотреть" и там уже Вы выбираете за кого персонажа будете играть</small>
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
//   componentDidUpdate() {
//     console.log(this.state);
//   }
}

// function mapStateToProps(state) {
//     return {
//         newUser: state.create.newUser
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         createNewUser: () => dispatch(mapStateToProps)
//     }
// }

export default СharacterCreator;