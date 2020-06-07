import React from 'react'

const Organization = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <select 
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {ListOrganization.map(function(option, k) {
                    return (
                        <option key={k} label={option.name} value={option.name}>
                            {option.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

const ListOrganization = [
    {name: 'Центральное Командование NT (ЦК)'},
    {name: 'Нано Трайзен (NT)'},
    {name: 'Правительство Солнечной Системы (SolGov)'},
    {name: 'Zeng-Hu-Pharmaceuticals'},
    {name: 'Второй Красный Квест'},
    {name: 'Вей Мед'},
    {name: 'BioTech Solutios'},
    {name: 'Гибсонский Инженерный союз'},
    {name: 'Gilthari Exports'}
]

export default Organization