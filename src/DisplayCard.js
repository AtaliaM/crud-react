import React from 'react';
import DeleteCard from './DeleteCard';

const DisplayCard = (props) => {
    let age;
    props.age > 120 ? age = Math.floor(props.age/1000) : age=props.age;
    return (
        <div id= {props.id}style={{display: "inline-block", border: "1px solid black", margin:"10px", padding:"5px"}}>
            <h3>{props.name}</h3>
            <img src={props.src} alt={props.alt} style={{width:"130px", height:"130px"}}></img>
            <h3>{`I am ${props.job}`}</h3>
            <h3>{`And I am ${age} Years old`}</h3>
            <DeleteCard id={props.id} deleteCard={props.deleteCard}/>
            <button>Update</button>
        </div>
    );
}

export default DisplayCard;