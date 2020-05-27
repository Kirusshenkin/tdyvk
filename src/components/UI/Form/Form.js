import React from 'react'
import Input from '../Input/Input'
import Organization from '../Radio/Organization/Organization'
import Origin from '../Select/SelectOrigin/SelectOrigin'
import Select from '../Select/SelectAge/SelectAge'
import SelectProfession from '../Select/SelectProfession/SelectProfession'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: '',
                Gender: '',
                Age: '',
                Professions: '',
                Organizations: '',
                accept: false,
                antagonist: '',
                origin: '',
            },
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearSubmit = this.handleClearSubmit.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleAge = this.handleAge.bind(this);
    }

    handleFullName(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              name: value
            }
          }),
          () => console.log(this.state.newUser)
        );
    }

    handleAge(e) {
        let value = e.target.value;
            this.setState( prevState => ({ newUser :
            {...prevState.newUser, Age: value}
            }), () => console.log(this.state.newUser) 
        )
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
            return {
                newUser : {
                    ...prevState.newUser, [name]: value
                }
            }
        }, () => console.log(this.state.newUser)
        )
    }

    handleFormSubmit(e) {

    }

    handleClearSubmit() {

    }

    change = (e) => {
        let { name, value, type, checked } = e.target

        if ( type === 'checkbox') {
            value = checked
        }

        this.setState({ [name]: value })
    }


    onSubmit(event) {
        // const {name} = event.target;
        event.preventDefault();
        // this.setState({
        //     [name]: value 
        // })
        console.log(this.props.state);
    }

    // переделать input name

    render() {
        // const {FirstName, LastName, Gender, Age, Professions, Organizations, accept, antagonist, origin} = this.state
        return (
            <form onSubmit={this.handleFormSubmit}>
                <Input type='text'
                    title = 'First Name'
                    name = 'name'
                    value = {this.state.newUser.name}
                    handleChange = {this.handleFullName.bind(this)}
                    placeholder = 'Ведите Ваше имя'
                />
                <Input type={'number'}
                    name={'age'}
                    value={this.state.newUser.Age}
                    placeholder={'Ваш возраст'}
                />
                {/* <Select 
                    label="Пол"
                    value={Gender}
                    onChange={this.change}

                /> */}
                {/* <SelectProfession
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
                <label>Желание быть в данной сессии антагонистом</label>
                <div className="antagonist">
                    <label className="container-radio">Да
                        <input type="radio" name="antagonist" className="agree" value="to-agree" checked={antagonist === 'to-agree'} onChange={this.change}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container-radio">Нет
                        <input type="radio" name="antagonist" className="refuse" value="refuse" checked={antagonist === 'refuse'} onChange={this.change}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <label>Принятие факта, что Ваш персонаж может погибнуть в первые минуты игры</label>
                <input 
                    type="checkbox" 
                    name="accept" 
                    id="accept"
                    checked={accept} 
                    onChange={this.change}
                /> */}
                <label htmlFor="accept" className="Accept">Да</label>

                <Origin
                    name="origin"
                    value={origin}
                    label="Происхождение"
                />

                <button value="Submit">Создать</button>
            </form>
        );
    }
    // временно 
    componentDidUpdate() {
        console.log(this.state);
    }
}

export default Form