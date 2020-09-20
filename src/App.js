import React from 'react';
import './App.css';
import MappingData from './MappingData';
import mock from './api/mock';

class App extends React.Component {

  state = { data: [] }

  async componentDidMount() {
    const response = await mock.get('/people');
    // console.log(response);
    this.setState({ data: (response).data });
    console.log(this.state.data);
  }


  render() {
    return (
      <div className="App">
        <MappingData info={this.state.data} />
      </div>
    );

  }
}

export default App;
