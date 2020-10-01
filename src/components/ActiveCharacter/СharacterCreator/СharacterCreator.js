import React, {Component} from "react";
import Http from '../../../hoc/Http/Http'
import { Link } from 'react-router-dom'
import './СharacterCreator.css'
import Input from '../../UI/Input/Input'
import Gender from '../../UI/Select/Gender/Gender'
import Antagonist from '../../UI/Radio/Antagonist/Antagonist'
import Button from '../../UI/Button/Button'
import Loader from '../../UI/Loader/Loader'
import Textarea from '../../UI/Textarea/textarea'
import Textareakbm from '../../UI/Textarea/KBM/KBM'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ReactTooltip from "react-tooltip";

import '../../UI/Select/Select.css'
import { connect } from "react-redux";
import {fetchOgranizations, fetchProfessions, fetchHomeland, fetchAdvantages, fetchDisadvantages} from '../../../store/actions/dispatch'

class СharacterCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    componentDidMount () {
        this.props.fetchOgranizations()
        this.props.fetchProfessions()
        this.props.fetchHomeland()
        this.props.fetchAdvantages()
        this.props.fetchDisadvantages()
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
                            <div>
                                <label htmlFor={name}>Профессия</label>
                                <select 
                                    name={"profession"}
                                    // value={profession}
                                    onChange={this.handleInput}
                                >
                                    <option selected disabled>Выберите Профессию</option>
                                    {this.props.professions.map(function(name, k) {
                                        return (
                                            <optgroup key={k} label={name.name}>
                                                {name.professions.map(function(name, i) {
                                                    return (
                                                        <option key={i} value={name.id} label={name.name}>
                                                            {name.name}
                                                        </option>
                                                    )
                                                })}
                                            </optgroup>
                                        )
                                    })}
                                </select>
                            </div>
                            <div>
                                <label htmlFor={name}>Организация</label>
                                <select 
                                    name={"organization"}
                                    // value={organization}
                                    onChange={this.handleInput}
                                >
                                <option selected disabled>{"Выберите организацию"}</option>
                                {this.props.organizations.map(function(name, k) {
                                    return (
                                        <option key={k} label={name.name} value={name.id}>
                                            {name.name}
                                        </option>
                                    )
                                })}
                                </select>
                            </div>
                            <Antagonist
                                type="checkbox"
                                value={be_antagonist}
                                title={"Хочу быть антогонистом"}
                                checked={be_antagonist}
                                name={"be_antagonist"}
                                handleChange={this.handleInput}
                            />
                            <div>
                                <label htmlFor={name}>Откуда ты там взялся?</label>
                                <select 
                                    name={"origins"}
                                    // value={origins}
                                    onChange={this.handleInput}
                                >
                                    <option selected disabled>Откуда ты епта?</option>
                                    {this.props.homeland.map(function(location, k) {
                                        return (
                                            <option key={k} value={location.id}>
                                                {location.location}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="adv">
                                <div className="form-group">
                                <label htmlFor={name} className="form-label">
                                    Преимущества
                                </label>
                                    <div className="checkbox">
                                        {this.props.advantages.map(option => {
                                        return (
                                            <label key={option.id} data-tip={option.content} className="container-checkbox">
                                            <input
                                                id={name}
                                                name={advantages}
                                                onChange={this.handleCheck}
                                                value={option.id}
                                                options={this.state.advantages}
                                                checked={advantages.indexOf(option.id) > -1}
                                                type="checkbox"
                                            />
                                            {option.name}
                                            <ReactTooltip place="top" type="dark" effect="solid"/>
                                            <span className="checkmark"/>
                                            </label>
                                        );
                                        })}
                                    </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor={name} className="form-label">
                                    Недостатки
                                </label>
                                    <div className="checkbox">
                                        {this.props.disadvantages.map(option => {
                                        return (
                                            <label key={option.id}  data-tip={option.content} className="container-checkbox">
                                            <input
                                                id={name}
                                                name={name}
                                                onChange={this.handledisCheck}
                                                value={option.id}
                                                options={this.state.disadvantages}
                                                checked={disadvantages.indexOf(option.id) > -1}
                                                type="checkbox"
                                            />
                                            {option.name}
                                            <ReactTooltip place="top" type="dark" effect="solid"/>
                                            <span className="checkmark"></span>
                                            </label>
                                        );
                                        })}
                                    </div>
                                </div>
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

function mapStateToProps(state) {
    return {
        organizations: state.organizations.organizations,
        loading: state.organizations.loading,
        professions: state.professions.professions,
        homeland: state.homeland.homeland,
        advantages: state.advantages.advantages,
        disadvantages: state.disadvantages.disadvantages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOgranizations: () => dispatch(fetchOgranizations()),
        fetchProfessions: () => dispatch(fetchProfessions()),
        fetchHomeland: () => dispatch(fetchHomeland()),
        fetchAdvantages: () => dispatch(fetchAdvantages()),
        fetchDisadvantages: () => dispatch(fetchDisadvantages())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(СharacterCreator);