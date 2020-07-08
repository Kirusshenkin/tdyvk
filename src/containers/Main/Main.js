import React from 'react'
import Alert from 'react-bootstrap/Alert'
// import Auth from '../Auth/Auth'

const Main = () => {
    return (
        ['warning'].map((variant, idx) => (
            <div style={{background:'#23272A', height:'100vh'}}>
                <Alert key={idx} variant={variant} style={{textAlign:"center"}}>
                    Это Альфа версия 1.0.1
                    <p>На этом сайте можно создать Вашего персонажа для игры ТДУВК</p>
                    <ul>
                        <li style={{listStyleType: 'none'}}>Сделали обновление!</li>
                        <li style={{listStyleType: 'none'}}>Где мы добавили загрузку страницы более лучше</li>
                        <li style={{listStyleType: 'none'}}>И так же сделали Вам подсказки о примуств и недостатков(просто наведите курсором мыши на него)</li>
                    </ul>
                </Alert>
                {/* <Auth/> */}
            </div>
        ))
    )
}

export default Main