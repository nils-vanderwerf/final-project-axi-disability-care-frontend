import React, { Component } from 'react'
import { Container, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class CategoryItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Link to={ { pathname: '/new-task', category_id: this.props.category.id } }>
                <Container>
                <h3>{this.props.category.name}</h3>
                </Container>
            </Link>
        )
    }
}
