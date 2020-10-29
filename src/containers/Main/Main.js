import React from 'react'
import Alert from 'react-bootstrap/Alert'
import './Main.css'
import info from '../../hoc/info-update/index.json'

const Main = () => {
    return (
        <>
            <div className="main-content">
                <Alert className="main-desc" variant='warning'>
                        <h1>{info.title}</h1>
                    <ul>
                        <li>{info.update}</li>
                        <li>{info.proposal}</li>
                        <li><small>{info.desc}</small></li>
                        <li><small>{info.version}</small></li>
                    </ul>
                </Alert>
            </div>
        </>
    )
}

export default Main