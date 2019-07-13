import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage';
import {Row, Col } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
      src: '/static/images/gm_logo.jpeg',
    },
    {
      src: '/static/images/hp_logo.png',
    },
    {
      src: '/static/images/fm_logo.jpg',
    },
    {
        src: '/static/images/wf_logo.jpeg',
    },
    {
        src: '/static/images/wo_logo.gif',
    }
  ];

class Resume extends Component{
    render(){
        return(
            <BaseLayout title="Syed Hussain - Find My Resume">
                <BasePage>
                    <Row>
                        <Col md={{size:5, offset:1}}>
                            <h1>Check out my resume</h1>
                            <h4>Experiences in mutiple business domains...</h4>
                            <ul>
                                <li>Television, Radio & Digital </li>
                                <li>Automotive</li>
                                <li>IT Consulting</li>
                                <li>Banking</li>
                                <li>Home Mortgage</li>
                            </ul>
                            <p>Download my resume below.</p>
                        </Col>
                        <Col md={{size:5, offset:1}}>
                            <div style={{ marginTop:'20px', height:'200px', width:'250px' }}>
                                <UncontrolledCarousel items={items} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size:10, offset:1}}>
                            <iframe style={{ width:'100%', height:'600px' }} src="/static/Syed_Hussain_SWE_resume_2019.pdf">
                            </iframe>
                        </Col>
                    </Row>

                </BasePage>
            </BaseLayout>
        )
    }
}

export default Resume;