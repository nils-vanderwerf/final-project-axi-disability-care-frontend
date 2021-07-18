import React, { Component } from 'react'
import { Container, TextField, InputLabel, FormGroup } from '@material-ui/core'
import axios from 'axios'


export default class NewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: {
                name: "",
                description: "",
                location: "",
                task_date: "",
                task_start_time: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const {name, description, location, task_date, task_start_time} = this.state.task
        const { task } = { ...this.state };
        event.preventDefault()
        console.log(this.state.name)
        axios.post('http://localhost:3001/api/v1/tasks/new', {
            task: task
        }
        ).
            then(response => {
                console.log(response)
                this.props.history.push("/pick-support-worker");
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    handleChange(event) {
        const { task } = { ...this.state };
        const currentState = task;
        const { name, value } = event.target;
        currentState[name] = value;

        this.setState({ task: currentState });
    }
    render() {
        const {name, description, location, task_date, task_start_time} = this.state.task
        return (
            <Container>
                <h2>New Task</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <InputLabel>Name *</InputLabel>
                    <TextField
                        name="name"
                        type="text"
                        value={name}
                        onChange={this.handleChange} margin="normal"
                        variant="outlined"
                        fullWidth required/>
                    <InputLabel>Description *</InputLabel>
                    <TextField
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth required/>
                    <InputLabel>Location</InputLabel>
                    <TextField
                        name="location"
                        value={location}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth required />
                    <InputLabel>Task Date</InputLabel>
                    <TextField
                        name="task_date"
                        value={task_date}
                        type="date"
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth required/>
                        <InputLabel>Task Start Time</InputLabel>
                    <TextField
                        name="task_start_time"
                        value={task_start_time}
                        type="time"
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined" />
                        </FormGroup>
                     <button onClick={this.handleSubmit}>
                        See Support Workers
                      </button>
                </form>
            </Container>
        )
    }
}
