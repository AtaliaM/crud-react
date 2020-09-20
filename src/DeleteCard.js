import React from 'react';
import mock from './api/mock';


class CreateCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: props.id};
    }

    componentDidMount() {
        console.log(this.state.id);
    }

    //the avatar is deleted, but it's seen only after refreshing the page 
    deleteCard = async() => {
        // const id = this.state.id;
        console.log(this.state.id);
        const response = await mock.delete(`/people/${this.state.id}`);
        console.log(response);
    }

    render() {
        return (
            <button onClick={this.deleteCard}>Delete</button>
        );
    }
}

export default CreateCard;