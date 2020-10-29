import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames'

import './Modal.css'

const Modal = (props) => {
    let {askModal} = props;
    return (
        <div className={classnames("myModal", {"show" : askModal})}>
            <div className="myBody">
                <div className="myModal-content">
                <FontAwesomeIcon icon={faCheckCircle}/>
                    <div className="myModal-desc">
                        <p>Успешно отправлено!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal