import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage';

class Resume extends Component{
    render(){
        return(
            <BaseLayout>
            <BasePage>
                <h1>This is resume page</h1>
            </BasePage>
            </BaseLayout>
        )
    }
}

export default Resume;