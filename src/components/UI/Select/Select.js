import React from 'react'
import './Select.css'
// сделать через функцию map()

function Genders(props) {
    const gender = props.gender;
    const listGenders = gender.map((name, k) =>
        <option key={k} label={name.name}>
            {name.name}
        </option>
    );
    return (
        <select>
            {listGenders}
        </select>
    )
}

const gender = [
    {value:'male', name: 'мужчина'},
    {value:'female', name: 'женщина'}
]

class Select extends React.Component {
    render() {
        return (
        <div>
            <label>{this.props.label}</label>
            <Genders gender={gender}/>
        </div>
        )
    }
}

// constructor(props) {
//     super(props);
//     this.state = {sex: 'Пол'};

//     this.handleChange = this.handleChange.bind(this);
//     // кнопка при нажатие выходит alert, то есть кнопка функции, которая вызывает результат
//     // this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleChange(event) {
//     this.setState({sex: event.target.value});
// }
// // вызываюшая функция при нажатие кнопки 
// // handleSubmit(event) {
// //     alert('Ваш любимый вкус: ' + this.state.value);
// // }

// render() {
//     return (
//         // тут должна быть <form onSubmit={this.habdleSubmit}>
//         <div>
//             <h5>Выберите пол</h5>
//             <select value={this.state.sex} onChange={this.handleChange}>
//                 <option value="" hidden>Выбрать</option>
//                 <option value="мужчина">мужчина</option>
//                 <option value="женщина">женщина</option>
//             </select>
//         </div>
//     );
// }
export default Select