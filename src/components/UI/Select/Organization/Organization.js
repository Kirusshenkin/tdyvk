import React from 'react'
import './Organization.css'
import Modal from './modal/modal'

// подумаать насчёт btn место radio !!!

const RadioOrganization = (props) => {
    let organizations = (
        <select>
            {listOrganization.map(function(group, k){
                return (
                    <option key={k} label={group.name}>
                        {group.name}
                    </option>
                )
            })}
        </select>
    )
    return organizations;
}
const listOrganization = [
    {name: 'Центральное Командование NT (ЦК)'},
    {name: 'Нано Трайзен (NT)'},
    {name: 'Правительство Солнечной Системы (SolGov)'},
    {name: 'Zeng-Hu-Pharmaceuticals'},
    {name: 'Второй Красный Квест'},
    {name: 'Вей Мед'},
    {name: 'BioTech Solutios'},
    {name: 'Гибсонский Инженерный союз'},
    {name: 'Gilthari Exports'}
];

class Organization extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                {RadioOrganization()}
                <Modal/>
            </div>
        )
    }
}

export default Organization