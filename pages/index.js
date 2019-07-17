import React, { Component } from 'react';
import { Container, Row, Col } from  'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://admin:admin@cluster0-5foep.mongodb.net/test?retryWrites=true&w=majority'
//                 , { useNewURLParser:true })
//   .then(() => console.log('Database connected'))
//   .catch(err => console.error(err)
// )

class Index extends Component{
    state = {
      isFlipping: false,
    }

    cardAnimation() {
      setInterval(() =>{
        this.setState({
        isFlipping: !(this.state.isFlipping)
        })
      }, 5000)

    }

    //Creating this so card animation gets mounted
    componentDidMount() {
      this.cardAnimation();
    }

    componentWillLeave() {
      this.setInterval && clearInterval(this.setInterval);
    }


    render(){
        console.log('render')
        
        return(
          <BaseLayout title="Syed Hussain - Personal Profile | Connect With Me" className="cover">
          <div className="main-section">
            <div className="background-image">
              <img src="/static/images/background-img.png" />
            </div>
        
            <Container>
              <Row>
                <Col md="6" className="hero-welcome-wrapper">
                  <div className="hero-welcome-text">
                    <h1>
                      Hello! Welcome to my site.
                      <br/>
                      <b>I am Syed Hussain</b>.
                      <br/>
                      <Typed
                        loop
                        typeSpeed={50}
                        backSpeed={50}
                        strings={["Software engineer",
                                  "Web developer",
                                  "Project lead",
                                  "Test automation developer",
                                  "Traveller",
                                  "Soon to be a parisian",
                                  "Over all cool dude!!"]}
                        backDelay={1000}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                      />
                      <br/>
                      <br/>
                      Discover projects I have worked on in the past few years!
                      <br/>
                      Feel free to email me for more information or collaboration, happy to connect:
                      <br/>
                      syedkhussain1@outlook.com
                    </h1>
                  </div>
                  <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/syedkhussain1/">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin fa-lg fa-stack-1x fa-inverse"></i>

                                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/syedkhussain1">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-github fa-lg fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://stackoverflow.com/users/5411179/syed-hussain?tab=profile">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-stack-overflow fa-lg fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/kamry01">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-lg fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                          </ul>
                  </div>
                </Col>
                <Col md="6">
                  <div className="hero-section">
                    <div className={`flipper ${this.state.isFlipping ? 'isFlipping' : ''}`}>
                      <div className="front">
                        <div className="hero-section-content">
                          <h2> Software Engineer </h2>
                          <div className="hero-section-content-intro">
                            Take a look around my website.
                          </div>
                        </div>
                        <img className="image" src="/static/images/section-1.png"/>
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                      <div className="back">
                        <div className="hero-section-content">
                          <h2> Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Experienced React.js and Django developer.
                          </div>
                        </div>
                        <img className="image" src="/static/images/section-1.png"/>
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </BaseLayout>
      
        )
    }
}

export default Index;