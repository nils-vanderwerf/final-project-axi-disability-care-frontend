import React, { Component } from 'react'
import { ListItem } from '@material-ui/core'

export default class CategoryItem extends Component {
    render() {
        return (
            <ListItem>
                <h1>Wut</h1>
                <h3>{this.props.category.title}</h3>
                <h3>{this.props.category.description}</h3>
            </ListItem>
        )
    }
}
