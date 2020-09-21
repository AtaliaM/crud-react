import React from 'react';
import DisplayCard from './DisplayCard';
// import CreateCard from './DisplayCard';

const MappingData = (props) => {
    const info = props.info;
    return (
        <>
        {info.map((singleData)=> {
            return (
                <DisplayCard key={singleData.id} alt={singleData.name} src={singleData.avatar} 
                name={singleData.name} task={singleData.task} id={singleData.id} job={singleData.job} age={singleData.age}
                deleteCard={props.deleteCard} updateCard={props.updateCard}
                />
            );
          })}
          </>
    );
}

export default MappingData;