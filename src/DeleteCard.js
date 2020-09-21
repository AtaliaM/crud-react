import React from 'react';

class DeleteCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: props.id};
    }

    // componentDidMount() {
    //     console.log(this.state.id);
    // }

    deleteCurrentCard = () => {
        const idToDelete = this.state.id;
        console.log(`deleting card with id: ${idToDelete}`);
        this.props.deleteCard(idToDelete);
    }

    render() {
        return (
            <button onClick={this.deleteCurrentCard}>Delete</button>
        );
    }
}

export default DeleteCard;


   // deleteCard = async() => {
    //     const currentCard = document.getElementById(`${this.state.id}`);
    //     currentCard.remove();
    //     // const id = this.state.id;
    //     console.log(this.state.id);
    //     const response = await mock.delete(`/people/${this.state.id}`);
    //     console.log(response);

    // }