import React, { Component } from 'react'
import {Link} from '../routes'
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,  Row, Col, CardHeader, Button } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage';

class Portfolio extends Component{
    state = {
        portfolios: [
          {
            applicationName: 'App Name',
            applicationDesc: 'Some Desc',
            stack: 'Built in Python | Java Script',
            url: 'https://google.com'
          },
           {
            applicationName: 'App Name',
            applicationDesc: 'Some Desc',
            stack: 'Built in Python | Java Script',
            url: 'https://google.com'
          },
           {
            applicationName: 'App Name',
            applicationDesc: 'Some Desc',
            stack: 'Built in Python | Java Script',
            url: 'https://google.com'
          }
        ]
    }

    // componentDidMount() {
    //     fetch(
    //       "https://jsonplaceholder.typicode.com/posts"
    //     )
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data)
    
    //         this.setState({
    //           posts: data.splice(0, 10)
    //         });
    //       });
    //   }
      // function to render post
      renderPosts(posts) {
          return (
            this.state.portfolios.map((portfolio, index) => {
              return (
                <Col md="4">
                  <React.Fragment key={index}>
                    <span>

                      <Card className="portfolio-card">
                        
                        <CardHeader className="portfolio-card-header">{ portfolio.applicationName }</CardHeader>
                        <CardBody>
                        <CardImg variant="top" src="../static/images/section-2.png" />
                          <p className="portfolio-card-city"> { portfolio.applicationDesc } </p>
                          <CardText className="portfolio-card-text">{ portfolio.stack }</CardText>
                          <Button variant="primary" href={portfolio.url}>Check it out!</Button>
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