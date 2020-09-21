import React from 'react';
import mock from './api/mock';


class DeleteCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: props.id};
    }

    componentDidMount() {
        console.log(this.state.id);
    }

    deleteCard = async() => {
        const currentCard = document.getElementById(`${this.state.id}`);
        currentCard.remove();
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

export default DeleteCard;