/* eslint-disable no-undef */
import React from 'react'
import './Form.css'
import Input from '../Input/Input'
import Select from '../Select/Select'

class Form extends React.Component {
    constructor(props) {
        super(props);
            this.state = {name: ' ', sex: ' '};
            this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        alert(`Вы создали персонажа "${this.state}"`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>>
                <div>
                    <h5>Ник</h5>
                    <Input name="name" value="text"/>
                </div>
                <Select />
                <div>
                    <h5>Возраст</h5>
                    <Input name="age" value="number"/>
                </div>
                <button value="Submit">Отправить</button>
            </form>
        );
    }
}

export default Form