import React from 'react';
import './App.css';
import MappingData from './MappingData';
import CreateCard from './CreateCard';
import mock from './api/mock';

class App extends React.Component {

  state = { data: [], nextAvailableId: ''}

  async componentDidMount() {
    const response = await mock.get('/people');
    // console.log(response);
    this.setState({ data: (response).data });
    console.log(this.state.data);

    this.setState({nextAvailableId: Number(response.data[response.data.length-1].id)+1});
    console.log(`next available id: ${this.state.nextAvailableId}`);
  }

  generateId = () => {
    const nextAvailableId = this.state.nextAvailableId;
    this.setState({nextAvailableId: nextAvailableId+1});

    return nextAvailableId;
  }


  render() {
    return (
      <div className="App">
        <CreateCard onSubmit={this.generateId}/>
        <MappingData info={this.state.data} />
      </div>
    );

  }
}

export default App;
