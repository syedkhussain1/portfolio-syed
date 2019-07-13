import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';
import BlogsDetails from '../pages/blogDetails';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Link from 'next/link';
import moment from 'moment'
import BlogContent from  "./jsonData/blogContent.json"

class Blogs extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          backdrop: false
        };
    
        this.toggle = this.toggle.bind(this);
      }

    toggle = (id) => {

      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }

    render(){
        return(
            <BaseLayout title="Syed Hussain -  Follow My Journey" headerType={'landing'} className="blog-listing-page">
                <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
                    <div className="overlay"></div>
                    <Container>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                        <span className="subheading"><h3>**PAGE UNDER CONSTRUCTION**</h3></span>
                            <h1>My Blogs</h1>
                            <span className="subheading">Where I share my programming and travelling experience...</span>
                            
                        </div>
                        </div>
                    </div>
                    </Container>
                </div>
                <BasePage className="blog-body">
                    <Row>
                    <Col md="10" lg="8" className="mx-auto">
                        
                        <React.Fragment>
                            {
                                BlogContent.map((blog, index) => {
                                    return(
                                        <div key={index}  className="post-preview">
                                                <h2 OnClick={this.NavToBlog} className="post-title">
                                                    { blog.title }
                                                </h2>
                                                <h5 className="post-subtitle">
                                                    { blog.desc }
                                                </h5>
                                                <Button outline color="info" onClick={() => this.toggle(blog.id)}>Read More...</Button>
                                            <p className="post-meta">
                                                Posted by { blog.postedBy } { moment().format('LLLL') }
                                            </p>
                                           
                                            <div>
                                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
                                              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                              <ModalBody>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                              </ModalBody>
                                              <ModalFooter>
                                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                              </ModalFooter>
                                            </Modal>
                                            
                                            </div>
                                            <hr></hr>
                                        </div>

                                    )
                                })
                            }
                        

                        </React.Fragment>
                    </Col>
                    </Row>
                    <footer>
                    <Container>

                    </Container>
                    </footer>
                </BasePage>
                </BaseLayout>
        )
    }
}

export default Blogs;