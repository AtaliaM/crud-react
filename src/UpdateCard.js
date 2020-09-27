import React from 'react';

class UpdateCard extends React.Component {

    state = {
        previousName: this.props.name, name: this.props.name,
        previousImage: this.props.image, image: this.props.image,
        previousAge: this.props.age, age: this.props.age,
        previousJob: this.props.job, job: this.props.job,
        id: this.props.id,
        
    }


    handleImageChange = event => {
        if (event.target.value !== "") {
            this.setState({ image: event.target.value });
        }
    }
    handleNameChange = event => {
        if (event.target.value !== "") {
            this.setState({ name: event.target.value });
        }
    }
    handleJobChange = event => {
        if (event.target.value !== "") {
            this.setState({ job: event.target.value });
        }
    }
    handleAgeChange = event => {
        if (event.target.value !== "") {
            this.setState({ age: event.target.value });
        }
    }

    updateCurrentCard = () => {
        const form = document.querySelector(`.form${this.state.id}`);
        form.style.display = "block";
        const idToUpdate = this.state.id;
        console.log(`updating card with id: ${idToUpdate}`);

    }

    handleSubmit = async event => {
        event.preventDefault();
        const form = document.querySelector(`.form${this.state.id}`);
        const warning = document.querySelector(`.updateWarning${this.state.id}`);
        warning.style.display = "none";
        
        const imageVerifier = new RegExp("(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)");
        const imageVerifierRes = imageVerifier.test(this.state.image);
        console.log(imageVerifierRes);
        let updatedName;
        let updatedAge;
        let updatedJob;
        let updatedImage;
        this.state.name !== "" ? updatedName = this.state.name : updatedName = this.state.previousName;
        this.state.age !== "" ? updatedAge = this.state.age : updatedAge = this.state.previousAge;
        this.state.job !== "" ? updatedJob = this.state.job : updatedJob = this.state.previousJob;
        this.state.image !== "" && imageVerifierRes ? updatedImage = this.state.image : updatedImage = this.state.previousImage;

        console.log(this.state.name);
        if (this.state.name.length >= 5 || this.state.name === this.state.previousName) {

            this.props.updateCard(updatedName, updatedImage, updatedAge, updatedJob, this.state.id);
            this.setState({ job: updatedJob, age: updatedAge });
            form.style.display = "none";
        }
        else {
            warning.style.display = "block";
        }
        this.setState({ name: updatedName, image: '' });
        

    }

    render() {
        return (
            <div>
                <button onClick={this.updateCurrentCard}>Update</button>
                <form style={{ display: "none" }} name="form" className={`form${this.state.id}`} onSubmit={this.handleSubmit}>
                    <label style={{ margin: "0 5px", display: "block" }}>
                        Update name:
              <input style={{ margin: "0 5px" }} type="text" name="name" onChange={this.handleNameChange} />
                    </label>
                    <label style={{ margin: "0 5px", display: "block" }}>
                        Update age:
              <input style={{ margin: "0 5px" }} type="text" age="age" onChange={this.handleAgeChange} />
                    </label>
                    <label style={{ margin: "0 5px", display: "block" }}>
                        Update job:
              <input style={{ margin: "0 5px" }} type="text" job="job" onChange={this.handleJobChange} />
                    </label>
                    <label style={{ margin: "0 5px", display: "block" }}>
                        Update image URL:
              <input style={{ margin: "0 5px" }} type="text" image="image" onChange={this.handleImageChange} />
                    </label>
                    <button type="submit">Update Avatar</button>
                    <h5 className={`updateWarning${this.state.id}`} style={{ display: "none" }}>Please check that you enter a name with minimum 5 letters and valid image url</h5>
                </form>
            </div>
        );
    }
}

export default UpdateCard;