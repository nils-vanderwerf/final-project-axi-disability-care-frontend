import React, { Component } from 'react'
import { Container, TextField, InputLabel, FormGroup } from '@material-ui/core'
import { connect } from 'react-redux'
import { getCurrentUser } from '../../redux/actions/session_actions'
import axios from 'axios'


class NewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: {
                name: "",
                user_id: this.props.getCurrentUser ? this.props.getCurrentUser.id : "",
                description: "",
                location: "",
                task_date: "",
                task_start_time: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.getCurrentUser())
    }


    handleSubmit(event) {
        const {name, description, location, task_date, task_start_time} = this.state.task
        const { task } = { ...this.state };
        event.preventDefault()
        console.log(this.state.name)
        axios.post('http://localhost:3001/api/v1/tasks/new', {
            task
        }
        ).
            then(response => {
                console.log(response)
                this.props.history.push("/pick-carer");
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

const mapStateToProps = state => {
    return {
      userData: state.user.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getCurrentUser: (user) => dispatch(getCurrentUser(user)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewTask)
  
