import React from 'react';

export default class CreateCard extends React.Component {
    state = {
        name: '', image: '', age: '', job: '', id: this.props.id,
    }

    handleImageChange = event => {
        this.setState({ image: event.target.value });
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    }
    handleJobChange = event => {
        this.setState({ job: event.target.value });
    }
    handleAgeChange = event => {
        this.setState({ age: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const form = document.querySelector(".form");
        form.reset();
        const warning = document.querySelector("h5");
        warning.style.display = "none";
        const imageVerifier = new RegExp("(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)");
        const imageVerifierRes = imageVerifier.test(this.state.image);
        console.log(imageVerifierRes);

        if (this.state.name.length >= 5 && imageVerifierRes) {

            this.props.createCard(this.state.name, this.state.image, this.state.age, this.state.job);
            this.setState({ job: '' });
            this.setState({ age: '' });
        }
        else {
            warning.style.display = "block";
        }
        this.setState({ name: '' }); //so the user won't submit the same avatar multiple times
        this.setState({ image: '' });

    }

    render() {
        return (
            <div>
                <form name="form" className="form" onSubmit={this.handleSubmit}>
                    <label style={{ margin: "0 5px" }}>
                        Name:
              <input style={{ margin: "0 5px" }} type="text" name="name" onChange={this.handleNameChange} />
                    </label>
                    <label style={{ margin: "0 5px" }}>
                        Age:
              <input style={{ margin: "0 5px" }} type="text" age="age" onChange={this.handleAgeChange} />
                    </label>
                    <label style={{ margin: "0 5px" }}>
                        Job:
              <input style={{ margin: "0 5px" }} type="text" job="job" onChange={this.handleJobChange} />
                    </label>
                    <label style={{ margin: "0 5px" }}>
                        Image URL:
              <input style={{ margin: "0 5px" }} type="text" image="image" onChange={this.handleImageChange} />
                    </label>
                    <button type="submit">Add Avatar</button>
                    <h5 style={{ display: "none" }}>Please check that you enter a name with minimum 5 letters and valid image url</h5>
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