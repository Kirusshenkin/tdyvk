import React from 'react'
import './Organization.css'

// подумаать насчёт btn место radio !!!

const RadioOrganization = (props) => {
    const listOrganization = props.listOrganization;
    const listOrganizations = listOrganization.map((name, k) =>
        <button key={k} label={name.name} value={name.name}>{name.name}</button>
    );
    return (
        <div>
            {listOrganizations}
        </div>
    )
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
                <RadioOrganization listOrganization={listOrganization}/>
            </div>
        )
    }
}

export default Organization