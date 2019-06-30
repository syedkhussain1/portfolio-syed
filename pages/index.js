import React, { Component } from 'react'
import { Container, Row, Col } from  'reactstrap'
import BaseLayout from '../components/layouts/BaseLayout'
import 'bootstrap/dist/css/bootstrap.min.css';


class Index extends Component{


    render(){
        console.log('render')
        
        return(
            <BaseLayout>
            <Container>
              <h1>This is index page!!!</h1>
              <button onClick={this.updateTitle}>Change Title</button>
            </Container>
                
                
            </BaseLayout>
        )
    }
}

export default Index;