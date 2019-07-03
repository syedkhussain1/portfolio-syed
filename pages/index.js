import React, { Component } from 'react';
import { Container, Row, Col } from  'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';
import { FaGithubSquare, FaFacebook } from 'react-icons/fa';

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
      }, 10000)

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
                  
                  {/* <div className="" >
                    <a href="https://github.com/syedkhussain1"><FaGithubSquare value={{ color: "black", size: '5em' }}/></a>
                    <a href="https://www.facebook.com/kamry01"><FaFacebook /></a>
                  </div> */}
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