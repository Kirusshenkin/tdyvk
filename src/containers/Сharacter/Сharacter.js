import React, { Component } from 'react'

class Сharacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personal: []
        }
    }
    render() {
        return (
        <div className="person">
            <div className="person__title">Ваш персонаж</div>
            <div className="person__name">Имя вашего персонажа</div>
            <div className="person__age">Возраст вашего персонажа</div>
        </div>
        )
    }
}

export default Сharacter