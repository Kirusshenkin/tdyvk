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

class Сharacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isButtonDisabled: false,
            characters: [],
            loading: true,
        }
    }
    async componentDidMount() {
        await Http.get('api/characters').then((response) => { 
            response.json().then(data => {
                console.log('data', data.data)
                this.setState({
                    loading: false,
                    characters: data.data 
                })
            })
        })
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

    render() {
        if(this.state.loading)
        return <div className="Character"><Loader/></div>
        return (
            <div className="Сharacter">
                <Container>
                    <h3>Ваши персонажи</h3>
                    <TabContainer id="list-group-tabs-example">
                        <Row>
                            <Col sm={4}>
                                <ListGroup className="list-created-characters">
                                    {this.state.characters ? this.state.characters.map((item, key) => (
                                        <ListGroup.Item action href={'#link' + key} key={key}>
                                          {item.name}
                                        </ListGroup.Item>
                                    )): null}

                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                {this.state.characters ? this.state.characters.map((item, key) => (
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
                                            <Button 
                                                value={item.id} 
                                                type="success" 
                                                label={"Отправить"} 
                                                disabled={this.state.isButtonDisabled} 
                                                onClick={(e) => this.handleMailCharacter(item.id,e)}
                                            >
                                                Отправить
                                            </Button>
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

export default Сharacter