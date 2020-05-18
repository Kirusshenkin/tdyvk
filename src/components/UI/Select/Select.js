import React from 'react'
import './Select.css'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Пол'};


        this.handleChange = this.handleChange.bind(this);
        // кнопка при нажатие выходит alert, то есть кнопка функции, которая вызывает результат
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    // вызываюшая функция при нажатие кнопки 
    // handleSubmit(event) {
    //     alert('Ваш любимый вкус: ' + this.state.value);
    // }

    render() {
        return (
            // тут должна быть <form onSubmit={this.habdleSubmit}>
            <div>
                <h5>Выберите пол</h5>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="мужчина">мужчина</option>
                    <option value="женщина">женщина</option>
                </select>
            </div>
        );
    }
}

export default Select