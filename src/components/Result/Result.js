import React from 'react'

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://tduvk.herokuapp.com/api/players/")
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(full_name => console.log("data", full_name))
        .catch(error => {
            console.log("error", error)
        });
    }

    render() {
        const { error, isLoaded, items } = this.state
        if (error) {
            return <div>Ошибка бляать: {error.message}</div>
        } else  if (!isLoaded) {
            return <div>Загрузка...</div>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default Result


// проблема с get запросом, узнать что это такое и как с ним работать в react