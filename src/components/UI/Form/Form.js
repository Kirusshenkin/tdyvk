import React from 'react'
// import Input from '../Input/Input'
import Organization from '../Radio/Organization/Organization'
import Select from '../Select/SelectAge/SelectAge'
import SelectProfession from '../Select/SelectProfession/SelectProfession'
import './Form.css'

class Form extends React.Component {
    state = {
        FirstName: '',
        LastName: '',
        Gender: '',
        Age: '',
        Professions: '',
        Organizations: '',
        accept: false,
        radio: '',
    }

    change = (e) => {
        let { name, value, type, checked } = e.target

        if( type === 'checkbox') {
            value = checked
        }

        this.setState({ [name]: value })
    }


    // onSubmit(event) {
    //     const {name} = event.target;
    //     event.preventDefault();
    //     // this.setState({
    //     //     [name]: value 
    //     // })
    //     console.log(name);
    // }

    // переделать input name

    render() {
        const {FirstName, LastName, Gender, Age, Professions, Organizations, accept} = this.state
        // const checkboxStyle = {
        // height: '10px',
        // borderRadius: '0px',
        // background: 'rgba( 0, 0, 0, 0.1)',
        // }
        return (
            <form onSubmit={this.onSubmit}>
                <div className="name">
                    <div>
                        <label>Имя</label>
                        <input 
                            name="FirstName"
                            value={FirstName}
                            label="Имя"
                            type="text"
                            onChange={this.change}
                        />
                    </div>
                    <div>
                        <label>Фамилия</label>
                    <input
                        name="LastName"
                        value={LastName}
                        label="Фамилия"
                        type="type"
                        onChange={this.change}
                    />
                    </div>
                </div>
                <Select 
                    label="Пол"
                    value={Gender}
                    onChange={this.change}

                />
                <div>
                    <label>Возраст</label>
                    <input
                        value={Age}
                        name="age" 
                        type="number"
                        label="Возраст"
                        onChange={this.change}

                    />
                </div>
                <SelectProfession
                    value={Professions}
                    name="Professions"
                    label="Профессии"
                    onChange={this.change}
                />
                <Organization 
                    label="Организация"
                    value={Organizations}
                    name="Organizations"
                    onChange={this.change}
                />
                {/* сделать да или нет */}
                {/* <div className="pick">
                        <input type="radio" name="accept" value="radio" checked={radio === 'accept'} onChange={this.change}/>Согласиться
                        <input type="radio" name=""/>
                </div> */}
                <label>Принятие факта, что Ваш персонаж может погибнуть в первые минуты игры
                {/* <br/> */}
                <input 
                    type="checkbox" 
                    name="accept" 
                    checked={accept} 
                    onChange={this.change}
                />Да
                </label>
                <button value="Submit">Отправить</button>
            </form>
        );
    }
    // временно 
    componentDidUpdate() {
        console.log(this.state);
    }
}

export default Form