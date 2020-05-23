import React from 'react'
import './Form.css'
import Input from '../Input/Input'
import Select from '../Select/SelectAge/SelectAge'
import SelectProfession from '../Select/SelectProfession/SelectProfession'
import Organization from '../Radio/Organization/Organization'

class Form extends React.Component {
    constructor(props) {
        super(props);
            this.state = {};
            // this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const {name} = event.target;
        event.preventDefault();
        // this.setState({
        //     [name]: value 
        // })
        console.log(name);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Input 
                    name="name"
                    label="Ник"
                    type="text"
                    onChange={this.onChange}
                />
                <Select 
                    label="Возраст"
                    onChange={this.onChange}

                />
                <Input
                    name="age" 
                    type="number" 
                    label="Возраст"
                    onChange={this.onChange}

                />
                <SelectProfession 
                    label="Профессии"
                    onChange={this.onChange}
                />
                <Organization 
                    label="Организация"
                    onChange={this.onChange}
                />
                <button value="Submit">Отправить</button>
            </form>
        );
    }
}

export default Form