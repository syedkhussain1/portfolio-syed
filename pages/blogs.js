import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';
import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link';
import moment from 'moment'

class Blogs extends Component{
    render(){
        return(
            <BaseLayout headerType={'landing'} className="blog-listing-page">
                <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
                    <div className="overlay"></div>
                    <Container>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>My Blogs</h1>
                            <span className="subheading">Where I share my travelling and programing experience...</span>
                        </div>
                        </div>
                    </div>
                    </Container>
                </div>
                <BasePage className="blog-body">
                    <Row>
                    <Col md="10" lg="8" className="mx-auto">
                        
                        <React.Fragment>
                        <div  className="post-preview">
                            <Link route={`/blogs/blogId`}>
                            <a>
                                <h2 className="post-title">
                                Very Nice Blog Post
                                </h2>
                                <h3 className="post-subtitle">
                                How I Start Porgramming...
                                </h3>
                            </a>
                            </Link>
                            <p className="post-meta">Posted by
                            <a href="#"> Syed Hussain </a>
                            {moment().format('LLLL')}</p>
                        </div>
                        <hr></hr>


                        </React.Fragment>
                    </Col>
                    </Row>
                    <footer>
                    <Container>
                        <Row>
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </Row>
                    </Container>
                    </footer>
                </BasePage>
                </BaseLayout>
        )
    }
}

export default Blogs;