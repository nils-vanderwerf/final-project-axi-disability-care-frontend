import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {Container, ListItem} from '@material-ui/core'
import CategoryItem from './CategoryItem';


export default class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.getCategories()
  }
  
  
  getCategories() {
    axios
      .get("http://localhost:3001/api/v1/categories/")
      .then(response => {
        console.log(response.data)
        this.setState({
          categories: response.data
        })
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  }
  
  render() {
    return (
        <Container className="splash-hero-container">
            <div className="splash-hero-slogan">
              <h1>Find a qualified support worker who understand your needs.</h1>
              <h2>Support Categories</h2>
              <ul class="category-list">
                {this.state.categories.map((category) => (
                  <CategoryItem key={category.id} category={category}/>
                ))}
              </ul>
            </div>
        </Container>
    )
  }
}


