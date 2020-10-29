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
        errors: {},
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
            appearance: '',
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
        this.props.fetchOgranizations();
        this.props.fetchProfessions();
        this.props.fetchHomeland();
        this.props.fetchAdvantages();
        this.props.fetchDisadvantages();
    }

    validateCharacter() {
        let {newUser} = this.state;
        let errors = {};
        for (let field in newUser) {
            let value = newUser[field];
            switch (field) {
                case 'name': 
                    if(value.length < 1) {
                        errors.name = 'Укажите имя персонажа'
                    };
                    break;
                case 'age':
                    if(value < 1) {
                        errors.age = 'Укажите возраст'
                    }
                    break;
                case 'sex':
                    if(value < 1) {
                        errors.sex = 'Выберите свой пол'
                    }
                    break;
                case 'profession':
                    if(value < 1) {
                        errors.profession = 'Выберите профессию'
                    }
                    break;
                case 'organization':
                    if(value < 1) {
                        errors.organization = 'Выберите организацию'
                    }
                    break;
                case 'origins':
                    if(value < 1) {
                        errors.origins = 'Выберите место рождения'
                    }
                    break;
                case 'advantages':
                    if(value.length < 1) {
                        errors.advantages = 'Выберите преимущества'
                    }
                    break;
                case 'disadvantages':
                    if(value.length < 1) {
                        errors.disadvantages = 'Выберите недостатки'
                    }
                    break;
                case 'appearance':
                    if(value.length < 1) {
                        errors.appearance = 'Внесите параметры внешности'
                    }
                    break;
                case 'kbm':
                    if(value.length < 1) {
                        errors.kbm = 'Внесите параметры КБМ'
                    }
                    break;
                default:
                    break;
            }
        }
        this.setState({errors})
    }

    // это redux
    handleFormSubmit(event) {
        this.validateCharacter();
        event.preventDefault();
        if(! Object.keys(this.state.errors).length ) {
            let CharacterData = this.state.newUser
            Http.post('api/characters', CharacterData).then((response) => {
                response.json().then(data => {
                    this.setState({
                        userData: data.data
                    })
                    if(data.response) this.props.history.push('/Сharacter');
                })
            })
        }
    }


  render() {
    if (this.state.loading) {
        return <div className="СharacterCreator"><Loader/></div>
    }
    const {name, age, sex, be_antagonist, advantages, disadvantages, appearance, kbm} = this.state.newUser;
    const {errors} = this.state;
    return (
      <div className="СharacterCreator">
          <Container>
            <Row>
              <Col>
                <div className="first-character">
                    <div className="main-characer">
                        <form onSubmit={this.handleFormSubmit}>
                        <Link to={"/Description"} className="description-lnk">Справочник</Link>
                            <Input
                                value={name}
                                type={"text"}
                                label={"Имя персонажа"}
                                name={"name"}
                                placeholder={"Ведите Ваше имя"}
                                onChange={this.handleInput}
                            />
                            <div className="validate-error">{errors.name ? errors.name : ''}</div>
                            <Input
                                value={age}
                                placeholder={"Ваш возраст?"}
                                type={"number"}
                                name={"age"}
                                label={"Возраст персонажа"}
                                onChange={this.handleInput}
                            />
                            <div className="validate-error">{errors.age ? errors.age : ''}</div>
                            <Gender
                                value={sex}
                                title={"Пол персонажа"}
                                name={"sex"}
                                handleChange={this.handleInput}
                                placeholder={"Выберите Ваш пол"}
                            />
                            <div className="validate-error">{errors.sex ? errors.sex : ''}</div>
                            <div>
                                <label htmlFor={name}>Профессия</label>
                                <select 
                                    name={"profession"}
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
                                <div className="validate-error">{errors.profession ? errors.profession : ''}</div>
                            </div>
                            <div>
                                <label htmlFor={name}>Организация</label>
                                <select 
                                    name={"organization"}
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
                            <div className="validate-error">{errors.organization ? errors.organization : ''}</div>
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
                            <div className="validate-error">{errors.origins ? errors.origins : ''}</div>
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
                                    <div className="validate-error">{errors.advantages ? errors.advantages : ''}</div>
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
                                    <div className="validate-error">{errors.disadvantages ? errors.disadvantages : ''}</div>
                                </div>
                            </div>
                            <Textarea
                                label="Параметры внешности"
                                onChange={this.handleInput}
                                name={"appearance"}
                                value={appearance}
                            />
                            <div className="validate-error">{errors.appearance ? errors.appearance : ''}</div>
                            <Textareakbm
                                label="КБМ"
                                onChange={this.handleInput}
                                name={"kbm"}
                                value={kbm}
                            />
                            <div className="validate-error">{errors.kbm ? errors.kbm : ''}</div>
                            <hr/>
                            <label>Принятие факта, что Ваш персонаж может погибнуть в первые минуты игры</label>
                            <Button 
                                value="Submit" 
                                onClick={() => this.handleFormSubmit} 
                                label={"Создать"} 
                                disabled={this.state.isButtonDisabled} 
                                type="success"
                            >
                                Создать
                            </Button>
                        </form>
                    </div>
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
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