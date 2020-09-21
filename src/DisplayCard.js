import React from 'react';
import DeleteCard from './DeleteCard';

const DisplayCard = (props) => {
    return (
        <div id= {props.id}style={{display: "inline-block", border: "1px solid black", margin:"10px", padding:"5px"}}>
            <h3>{props.name}</h3>
            <img src={props.src} alt={props.alt}></img>
            <h3>{`I am ${props.job}`}</h3>
            <h3>{`And I am ${Math.floor(props.age/1000)} Years old`}</h3>
            <DeleteCard id={props.id}/>
            <button>Update</button>
        </div>
    );
}

export default DisplayCard;