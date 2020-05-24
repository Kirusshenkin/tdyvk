import React from 'react'
import './Organization.css'
import Modal from '../Organization/modal/modal'

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
    {value: 'CENTRAL COMMAND' , name: 'Центральное Командование NT (ЦК)'},
    {value: 'Nano Trasen', name: 'Нано Трайзен (NT)'},
    {value: 'SolGov', name: 'Правительство Солнечной Системы (SolGov)'},
    {value: 'Zeng-Hu-Pharmaceuticals', name: 'Zeng-Hu-Pharmaceuticals'},
    {value: 'Second Red Cross', name: 'Второй Красный Квест'},
    {value: 'VM', name: 'Вей Мед'},
    {value: 'BTS', name: 'BioTech Solutios'},
    {value: 'GIU', name: 'Гибсонский Инженерный союз'},
    {value: 'GEX', name: 'Gilthari Exports'}
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