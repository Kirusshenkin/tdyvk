/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const Main = () => {
    return (
        <div style={{paddingTop:'60%',position:'relative'}}>
            <iframe 
                src={'https://gifer.com/embed/WTw'}
                width={'100%'}
                height={'100%'}
                style={{position:'absolute',top:'0',left:'0'}}
                frameBorder="0" 
                allowFullScreen>
            </iframe>
        </div> 
    )
}

export default Main