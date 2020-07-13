import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Animation from '../../components/Animation/Animation'
// import Auth from '../Auth/Auth'


const Main = () => {
    return (
            <div style={{background:'#23272A', height:'100vh'}}>
                <Alert variant='warning' style={{textAlign:"center"}}>
                <h1>это сайт ТДУВК v1.0.1a</h1>
                    <ul>
                        <li style={{listStyleType: 'none'}}>Мы сделали обновление!</li>
                        <li style={{listStyleType: 'none'}}>Добавлены пункты Внешности и КБМ!</li>
                        <li style={{listStyleType: 'none'}}>Так же были исправлены незначительные недочёты</li>
                    </ul>
                </Alert>
                    <Animation/>
                {/* <Auth/> */}
            </div>
    )
}

export default Main