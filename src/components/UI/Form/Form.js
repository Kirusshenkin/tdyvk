import React from 'react'
import './Form.css'
import Input from '../Input/Input'
import Select from '../Select/Select'
import SelectProfession from '../Select/SelectProfession/SelectProfession'

class Form extends React.Component {
    constructor(props) {
        super(props);
            this.state = {name: ' ', sex: ' ',};
            this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        alert(`Вы создали персонажа "${this.state}"`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Input 
                    name="name"
                    label="Ник"
                    type="text"
                />
                <Select 
                    label="Возраст"
                />
                <Input
                    name="age" 
                    type="number" 
                    label="Возраст"
                />
                <SelectProfession 
                    label="Профессии"
                />
                <button value="Submit">Отправить</button>
            </form>
        );
    }
}

export default Form