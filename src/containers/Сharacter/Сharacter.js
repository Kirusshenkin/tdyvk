import React, { Component } from 'react'
import TabContainer from 'react-bootstrap/TabContainer'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
// import TabContent from 'react-bootstrap/TabContent'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '../../components/UI/Button/Button'
// import Tab from 'react-bootstrap/Tab'

import './Сharacter.css'

class Сharacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personal: [],
            loading: true
        }
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
                                    <ListGroup.Item action href="#link1">
                                        Таркан
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Мудлан
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Сутлан
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        Мунжак
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link5">
                                        Ебарик
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link1">
                                        <ul>
                                            <li><span>Имя: </span>Таркан</li>    
                                            <li><span>Возраст: </span>30</li>    
                                            <li><span>Пол: </span>Мужчина</li>    
                                            <li><span>Профессия: </span>Робототехник</li>
                                            <li><span>Организация: </span>BioTech Solutions (BTS)</li>
                                            <li><span>Антогонист: </span>Нет</li>
                                            <li><span>Откуда: </span>Новый Гибсон</li>  
                                            <li><span>Преимущества: </span>Исчерпывающий опыт,Высокий болевой порог</li>  
                                            <li><span>Недостатки: </span>Срочный перевод</li>  
                                            <li><span>Параметры внешности: </span>Высокий, худой, бледный. С растрепанной прической и длинными, чуть закрученными усами.</li>  
                                            <li><span>КБМ: </span>1 Инфракрасное зрение 2 Ночное зрение 2 Ремонтные наноботы -1 эн пас 3 Система вывода радиации - 1 эн пас 4 Дистанционное управление -1 эн пас 5 Модуль робототехника -1 эн пас 6 Встроенный сопроцессор -1 эн пас 7 Диэлектрическая система конденсаторов - 1 эн акт 8 Встроенный набор инструментов - 1 эн акт 9 Аккумулятор +3 эн 10 Аккумулятор +3 эн</li>
                                        </ul>
                                        <div style={{display: 'flex'}}>
                                            <Button>Отправить</Button>
                                            <Button>Удалить</Button>
                                        </div>
                                    </Tab.Pane>
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