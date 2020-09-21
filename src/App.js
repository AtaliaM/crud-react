import React from 'react';
import './App.css';
import MappingData from './MappingData';
import CreateCard from './CreateCard';
import mock from './api/mock';

class App extends React.Component {

  state = { data: [], nextAvailableId: '' }

  async componentDidMount() {
    const response = await mock.get('/people');
    console.log(response);
    this.setState({ data: (response).data });
    console.log(this.state.data);

    this.setState({ nextAvailableId: Number(response.data[response.data.length - 1].id) + 1 });
    // console.log(`next available id: ${this.state.nextAvailableId}`);
  }

  deleteCard = async (currentIdToDelete) => {
    console.log(`in app. deleting id number: ${currentIdToDelete}`);
    const response = await mock.delete(`/people/${currentIdToDelete}`);
    console.log(response);

    const updatedData = this.state.data.filter(obj => {
      return obj.id !== currentIdToDelete;
    })
    console.log(updatedData);
    this.setState({ data: updatedData });
  }

  createCard = async (name,image,age,job) => {
    let newCard = {}; //the user has to enter name and image. age and job are not mendatory. 
    age !== "" && job !== "" ? newCard = {name: name, avatar: image, age: age, job: job} : 
    age !== "" ? newCard = {name: name, avatar: image, age: age} :
    job !== "" ? newCard = newCard = {name: name, avatar: image, job: job} :
    newCard = {name: name, avatar: image};
    console.log(newCard);

    // const newCard = {name: name, avatar: image, };
    const response = await mock.post(`/people/`, newCard);
    // console.log(response.data);
    const updatedData = this.state.data;
    updatedData.push(response.data);
    this.setState({data:updatedData});
    // console.log(this.state.data);
  }


  generateId = () => {
    const nextAvailableId = this.state.nextAvailableId;
    this.setState({ nextAvailableId: nextAvailableId + 1 });

    return nextAvailableId;
  }


  render() {
    return (
      <div className="App">
        <CreateCard onSubmit={this.generateId} createCard={this.createCard} />
        <MappingData info={this.state.data} deleteCard={this.deleteCard} />
      </div>
    );

  }
}

export default App;
