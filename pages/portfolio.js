import React, { Component } from 'react'
import {Link} from '../routes'
import BaseLayout from '../components/layouts/BaseLayout'

class Portfolio extends Component{
    state = {
        posts: []
    }

    componentDidMount() {
        fetch(
          "https://jsonplaceholder.typicode.com/posts"
        )
          .then(response => response.json())
          .then(data => {
            console.log(data)
    
            this.setState({
              posts: data.splice(0, 10)
            });
          });
      }
      // function to render post
      renderPosts(posts) {
          return (
            posts.map((post, index) => {
              return (
                <li key={ index }>
                  <Link route={`/portfolioDetails/${ post.id }`}>
                      <a>{ post.title }</a>
                  </Link>
                </li>
              )
            })
          )
      }

    render(){
        console.log(this.state.posts)
        return(
            
            <BaseLayout>
            <h2>This is portfolio page</h2>
            <ul>
                {this.renderPosts(this.state.posts)}              
            </ul>
            </BaseLayout>
        )
    }
}

export default Portfolio;