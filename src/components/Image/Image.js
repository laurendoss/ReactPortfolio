import React from 'react'
import headShot from '../../images/lauren.jpg'
import "./style.css"

function Photo () {
    return (
        <div id="imgHolder">
        <img id="photo" src ={headShot} alt="lauren" />
        </div>
    )
}

export default Photo; 