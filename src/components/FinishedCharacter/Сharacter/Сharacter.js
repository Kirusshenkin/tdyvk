import React, { Component } from 'react'
import TabContainer from 'react-bootstrap/TabContainer'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
// import TabContent from 'react-bootstrap/TabContent'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '../../UI/Button/Button'
import Http from '../../../hoc/Http/Http'
// import Tab from 'react-bootstrap/Tab'

import './Сharacter.css'

class Сharacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            loading: true
        }
    }
    async componentDidMount() {
        await Http.get('api/characters').then((response) => { 
            response.json().then(data => {
                this.setState({
                    loading: false,
                    characters: data.data 
                })
            })
        })
    }
    render() {
        return (
            <div className="Сharacter">
                <Container>
                    <h3>Гоблин</h3>
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
                                            <li><span>Откуда: </span>Москва</li>  
                                            <li><span>Преимущества: </span>{item.advantages.map(advantage => (advantage.name)).join(', ')}</li>  
                                            <li><span>Недостатки: </span>{item.disadvantages.map(disadvantage => (disadvantage.name)).join(', ')}</li>  
                                            <li><span>Параметры внешности: </span>{item.view_description}</li>  
                                            <li><span>КБМ: </span>{item.kbm}</li>
                                        </ul>
                                        <div className='active-btn'>
                                            <Button type="success">Отправить</Button>
                                            <Button type="error">Удалить</Button>
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

export default Сharacter