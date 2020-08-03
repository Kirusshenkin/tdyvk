import React from 'react'
import Alert from 'react-bootstrap/Alert'
import './Main.css'

const Main = () => {
    return (
        <>
        <div style={{background:'#23272A'}}>
            <Alert variant='warning' style={{textAlign:"center"}}>
            <h1>это сайт ТДУВК</h1>
                <ul>
                    <li style={{listStyleType: 'none'}}>Мы сделали обновление!</li>
                    <li style={{listStyleType: 'none'}}>Мы добавили авторизацию и регистрацию, теперь Вы можете создавать несколько персонажей и всех Вы будете видеть</li>
                    <li style={{listStyleType: 'none'}}>А так же скидывать всё <strong>ГМу</strong></li>
                </ul>
            </Alert>
        </div>
        <div className="container">
            <div className="stages">
                <div className="step first-step">
                    <span>
                        Ты авторизовался?
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main