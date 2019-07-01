import React, { Component } from 'react';
import { Container, Row, Col } from  'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';



class Index extends Component{


    render(){
        console.log('render')
        
        return(
          <BaseLayout className="cover">
          <div className="main-section">
            <div className="background-image">
              <img src="/static/images/background-img.png" />
            </div>
        
            <Container>
              <Row>
                <Col md="6" className="hero-welcome-wrapper">
                  <div className="hero-welcome-text">
                    <h1>
                      Welcome to my site. I am <b>Syed Hussain</b>.
                      <br/>
                      <Typed
                        loop
                        typeSpeed={50}
                        backSpeed={50}
                        strings={["Software Engineer",
                                  "Web Developer",
                                  "Project Manager"]}
                        backDelay={1000}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                      />
                      <br/>
                      <br/>
                      Get informed, collaborate and discover projects I was working on through the years!
                    </h1>
                  </div>
                  
                  <div className="hero-welcome-bio">

                  </div>
                </Col>
                <Col md="6">
                  <div className="hero-section">
                    <div className={`flipper`}>
                      <div className="back">
                        <div className="hero-section-content">
                          <h2> Full Stack Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
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