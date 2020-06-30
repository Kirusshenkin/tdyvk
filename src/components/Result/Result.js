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
        // let userData = this.state.items;
        fetch("https://tduvk.herokuapp.com/api/players/", {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
        })
        .then(response => {
            // console.log(response);
            
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(
            (result) => {
                console.log('result' ,result)
                this.setState({
                    isLoaded: true,
                    items: result
                })
            }
        )
        .then(item => console.log("data", item))
        .catch(error => {
            console.log("error", error)
        });
    }

    render() {
        const { error, isLoaded, items } = this.state
        console.log(this.state);
        
        if (error) {
            return <div>Ошибка бляать: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Загрузка...</div>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        // console.log('item',item)
                        <li key={item.full_name}>
                            <strong>Имя -</strong>{item.full_name}
                            <strong>Пол -</strong>{item.sex}
                            <strong>Возраст - </strong>{item.age}
                            <strong>Профессия - </strong>{item.profession}
                            <strong>Огранизация - </strong>{item.organization}
                            <strong>Какаята хуйня - </strong>{item.be_antagonist}
                            <strong>Чо это вообще такое - </strong>{item.origins}
                            <strong>Навыки - </strong>{item.advantages}
                        </li>
                        // <li key={item.}></li>
                    ))}
                </ul>
            )
        }
    }
}

export default Result


// проблема с get запросом, узнать что это такое и как с ним работать в react