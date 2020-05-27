import React from 'react'

const SelectOrigin = () => {
    let Origins = (
        <select>
            {ListOrigin.map(function(group, k){
                return (
                    <option key={k} label={group.value}>
                        {group.name}
                    </option>
                )
            })}
        </select>
    )
    return Origins;
}

const ListOrigin = [
    {value: 'Земля', name: 'Земля'},
    {value: 'Марс', name: 'Марс'},
    {value: 'Венера', name: 'Венера'},
    {value: 'Бимпа', name: 'Бимпа'},
    {value: 'Новый Гибсон', name: 'Новый Гибсон'},
    {value: 'Рождённый на КС', name: 'Рождённый на КС'} 
];

class Origin extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                {SelectOrigin()}
            </div>
        )
    }
}

export default Origin