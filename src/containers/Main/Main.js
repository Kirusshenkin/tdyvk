import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Main = () => {
    return (
        ['warning'].map((variant, idx) => (
            <div style={{background:'#23272A', height:'100vh'}}>
                <Alert key={idx} variant={variant} style={{textAlign:"center"}}>
                    Это Альфа версия 1.0.0
                    <p>На этом сайте можно создать Вашего персонажа для игры ТДУВК</p>
                    <p>Если Вам пока что не понятно, как надо создавать, то есть в разделе описание</p>
                </Alert>
            </div>
        ))
    )
}

export default Main