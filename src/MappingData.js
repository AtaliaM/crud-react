import React from 'react';
import CreateCard from './DisplayCard';

const MappingData = (props) => {
    const info = props.info;
    return (
        <>
        {info.map((singleData)=> {
            return (
                <CreateCard key={singleData.id} alt={singleData.name} src={singleData.avatar} 
                name={singleData.name} task={singleData.task} id={singleData.id} job={singleData.job} age={singleData.age}/>
            );
          })}
          </>
    );
}

export default MappingData;