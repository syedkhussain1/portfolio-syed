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
            applicationName: 'AaayMdb',
            applicationDesc: 'App pull movies from OMDB API and lets you make a custom movies list.',
            stack: 'Built in React.js | Python server | MongoDB',
            src: '../static/images/AaayMDB.png',
            url: 'https://protected-retreat-68530.herokuapp.com/'
          },
           {
            applicationName: 'Group Meet',
            applicationDesc: 'This application improve diversity at work place by matching users with similar interests.',
            stack: 'Built in Python | Django | SQLite',
            src: '../static/images/GroupMeet.png',
            url: 'https://polar-lake-85399.herokuapp.com/'
          },
          {
            applicationName: 'Apartment Rentals',
            applicationDesc: 'Apartment Rental mockup website. Marking it easy to rent apartments.',
            stack: 'Built in React.js',
            src: '../static/images/apartment_rental.png',
            url: 'https://polar-lake-85399.herokuapp.com/'
          },
          {
            applicationName: 'Fifa 2018 Stats',
            applicationDesc: 'Getting data back from football API and generating dynamic graps based on stats.',
            stack: 'Built in React.js',
            src: '../static/images/fifa_stats.png',
            url: 'https://stormy-shelf-17801.herokuapp.com/'
          },
          {
            applicationName: 'Zeen Moi Landing Page',
            applicationDesc: 'Your beauty needs on demand. Get more info on how the application works.',
            stack: 'Built in HTML5 | CSS',
            src: '../static/images/zeenmoi.png',
            url: 'https://zeenmoi.com'
          },
          {
            applicationName: 'Django boilerplate',
            applicationDesc: 'Django bolierplate for user authentication and admin portal. Basically a plug and chug for building apps.',
            stack: 'Built in Django | Python | SQLite',
            src: '../static/images/py_logo.jpg',
            url: 'https://github.com/syedkhussain1/Django_Authentication'
          },
          {
            applicationName: 'Selenium Test Automation',
            applicationDesc: 'Selenium Test Automation framework built for testing browser based applications.',
            stack: 'Built in Java | Maven | Testng',
            src: '../static/images/selenium_logo.jpg',
            url: 'https://github.com/syedkhussain1/Selenium_Maven'
          },
          {
            applicationName: 'Rest-Assured Test Automation',
            applicationDesc: 'Rest-Assured Test Automation framework built for testing rest Api.',
            stack: 'Built in Java | Maven | Testng',
            src: '../static/images/ra_logo.jpeg',
            url: 'https://github.com/syedkhussain1/Java_RestAssured_Automation_ForXML'
          },
          {
            applicationName: 'Fifa Stats JS',
            applicationDesc: 'Fifa stats application built in vanilla JS',
            stack: 'Built in pure vanilla JS',
            src: '../static/images/fifa_stats.png',
            url: 'https://syedkhussain1.github.io/Data_Visualization_2'
          },
          {
            applicationName: 'Android chat Application',
            applicationDesc: 'Whatsapp clone android chat application',
            stack: 'Built in Android | Java | Firebase',
            src: '../static/images/android_chat.png',
            url: 'https://github.com/syedkhussain1/Android_chatApp'
          },
          {
            applicationName: 'Zeen Moi Android Application',
            applicationDesc: 'Your beauty needs on demand.',
            stack: 'Built in Android | Java',
            src: '../static/images/zm_aa.jpg',
            url: 'https://github.com/syedkhussain1/ZeenMoi-Android-App'
          },
          {
            applicationName: 'Clima Android Application',
            applicationDesc: 'Personal Android weather application, that gets data from weather API.',
            stack: 'Built in Android | Java',
            src: '../static/images/clima.jpg',
            url: 'https://github.com/syedkhussain1/Climate_Android_App'
          },
        ]
    }

      renderPosts() {
          return (
            this.state.portfolios.map((portfolio, index) => {
              return (
                <Col md="4">
                  <React.Fragment key={index}>
                    <span>

                      <Card className="portfolio-card">
                        
                        <CardHeader className="portfolio-card-header">{ portfolio.applicationName }</CardHeader>
                        <CardBody>
                          <div >
                            <CardImg variant="top" src={ portfolio.src } />
                          </div>
                        
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
            <BasePage className="portfolio-page" title="Check out my portfolio">
            <Row>
                {this.renderPosts(this.state.posts)}              
            </Row>
            </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolio;