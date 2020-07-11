import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Animation from '../../components/Animation/Animation'
// import Auth from '../Auth/Auth'


const Main = () => {
    return (
            <div style={{background:'#23272A', height:'100vh'}}>
                <Alert variant='warning' style={{textAlign:"center"}}>
                    Это Альфа версия 1.0.1
                    <p>На этом сайте можно создать Вашего персонажа для игры ТДУВК</p>
                    <ul>
                        <li style={{listStyleType: 'none'}}>Сделали обновление!</li>
                        <li style={{listStyleType: 'none'}}>Где мы добавили загрузку страницы более лучше</li>
                        <li style={{listStyleType: 'none'}}>И так же сделали Вам подсказки о преимуществах и недостатков(просто наведите курсором мыши на него)</li>
                    </ul>
                </Alert>
                    <Animation/>
                {/* <Auth/> */}
            </div>
    )
}

export default Main