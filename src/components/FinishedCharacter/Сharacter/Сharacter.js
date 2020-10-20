import React, { Component } from 'react'
import TabContainer from 'react-bootstrap/TabContainer'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Loader from '../../UI/Loader/Loader'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '../../UI/Button/Button'
import Http from '../../../hoc/Http/Http'

import './Сharacter.css'
import { connect } from 'react-redux'
import {fetchCharacters} from '../../../store/actions/character'

class Сharacter extends Component {

    constructor(props) {
        super(props)
        this.handleMailCharacter = this.handleMailCharacter.bind(this);
        this.DeleteCharacter = this.DeleteCharacter.bind(this);
    }

    componentDidMount() {
        this.props.fetchCharacters()
    }

    handleMailCharacter(characterId,event) {
        event.preventDefault();
        this.setState({isButtonDisabled: true})
        setTimeout(() => {
            Http.post('api/character/mail', {characterId: characterId}).then((response) => {
                response.json().then(data => {
                    alert('Ваша анкета была отправлена!')
                })
            })
        }, 2000)
    }
    
    DeleteCharacter(characterId,event) {
        event.preventDefault();
        this.setState({isButtonDisabled: true})
        Http.del('api/character/'+characterId, {characterId: characterId}).then((response) => {
            response.json().then(data => {
                this.props.characters.filter((item, key) => {
                    return (item.id !== characterId)
                })
                this.props.fetchCharacters()
            })
        })
    }

    render() {
        if(this.props.loading)
        return <div className="Character"><Loader/></div>
        return (
            <div className="Сharacter">
                <Container>
                    <h3>Ваши персонажи</h3>
                    <TabContainer id="list-group-tabs-example">
                        <Row>
                            <Col sm={4}>
                                <ListGroup className="list-created-characters">
                                    {this.props.characters ? this.props.characters.map((item, key) => (
                                        <ListGroup.Item action href={'#link' + key} key={key}>
                                          {item.name}
                                        </ListGroup.Item>
                                    )): null}

                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                {this.props.characters ? this.props.characters.map((item, key) => (
                                    <Tab.Pane eventKey={'#link' + key} key={key}>
                                        <ul>
                                            <li><span>Имя: </span>{item.name}</li>    
                                            <li><span>Возраст: </span>{item.age}</li>    
                                            <li><span>Пол: </span>{item.sex}</li>    
                                            <li><span>Профессия: </span>{item.profession.name}</li>
                                            <li><span>Организация: </span>{item.organization.name}</li>
                                            <li><span>Антогонист: </span>{item.is_antoghanist ? 'Да' : 'Нет'}</li>
                                            <li><span>Откуда: </span>{item.homeland.location}</li>  
                                            <li><span>Преимущества: </span>{item.advantages.map(advantage => (advantage.name)).join(', ')}</li>  
                                            <li><span>Недостатки: </span>{item.disadvantages.map(disadvantage => (disadvantage.name)).join(', ')}</li>  
                                            <li><span>Параметры внешности: </span>{item.view_description}</li>  
                                            <li><span>КБМ: </span>{item.kbm}</li>
                                        </ul>
                                        <div className="btns">
                                            <Button 
                                                value={item.id} 
                                                type="success" 
                                                label={"Отправить"} 
                                                disabled={this.props.isButtonDisabled} 
                                                onClick={(e) => this.handleMailCharacter(item.id,e)}
                                            >
                                                Отправить
                                            </Button>
                                            <Button
                                                value={item.id}
                                                type="error"
                                                label={"Удалить"}
                                                disabled={this.props.isButtonDisabled} 
                                                onClick={(e) => this.DeleteCharacter(item.id,e)}
                                            >
                                                Удалить
                                            </Button>
                                        </div>
                                    </Tab.Pane>
                                )): null}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </TabContainer>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters.characters,
        loading: state.characters.loading,
        isButtonDisabled: state.characters.isButtonDisabled
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCharacters: () => dispatch(fetchCharacters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Сharacter)