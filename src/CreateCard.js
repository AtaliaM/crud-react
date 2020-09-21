import React from 'react';
import mock from './api/mock';


export default class CreateCard extends React.Component {
    state = {
        name: '', image: '', id: this.props.id,
    }

    handleChange = event => {
        this.setState({ name: event.target.value, image: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        document.form.reset();
        const warning = document.querySelector("h5");
        warning.style.display = "none";

        if (this.state.name.length >= 5) {

            this.props.createCard(this.state.name);

        }
        else {
            warning.style.display = "block";
        }
        this.state.name = ''; //so the user won't submit the same avatar multiple times

    }

    render() {
        return (
            <div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
              <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    {/* <label>
              Image URL:
              <input type="text" avatar="avatar" onChange={this.handleChange} />
            </label> */}
                    <button type="submit">Add Avatar</button>
                    <h5 style={{ display: "none" }}>The name must be at least 5 characters long</h5>
                </form>
            </div>
        )
    }
}


   // const response = await mock.post(`/people/`);

            // response.data.name = this.state.name;
            // console.log(response);
            // console.log(response.data);
            // Object.defineProperty(response.data, 'name', {
            //     value: this.state.name,
            //     writable: true
            //   });