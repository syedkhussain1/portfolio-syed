import React, { Component } from 'react'
import {Link} from '../routes'
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,  Row, Col, CardHeader } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage';

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
                <Col md="4">
                  <React.Fragment key={index}>
                    <span>
                      <Card className="portfolio-card">
                        <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                        <CardBody>
                          <p className="portfolio-card-city"> Some Location {index} </p>
                          <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
                          <CardText className="portfolio-card-text">Some Description {index}</CardText>
                          <div className="readMore"> </div>
                        </CardBody>
                      </Card>
                    </span>
                  </React.Fragment>
                  </Col>
              )
            })
          )
      }

    render(){
        console.log(this.state.posts)
        return(
            
            <BaseLayout>
            <BasePage className="portfolio-page" title="Portfolios">
            <Row>
                {this.renderPosts(this.state.posts)}              
            </Row>
            </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolio;