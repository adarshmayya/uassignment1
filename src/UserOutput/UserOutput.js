import React from 'react';
import "./UserOutput.css"

const UserOutput = (props) =>{

    return(
        <div className="UserOutput">
        <p>{props.name} says {props.text}</p>
        </div>



    )
}

export default UserOutput