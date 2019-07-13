import React, { Component } from 'react'
import { withRouter } from 'next/router';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage';
import axios from 'axios';


class PortfolioDetails extends Component{

    static async getInitialProps({query}){
        const portfolioId = query.id;
        let portfolioData = {};

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`)
            portfolioData = response.data

        } catch(err){
            console.error(err)
        }
        return {portfolioData};
    }


    render(){
        const portfolioData = this.props.portfolioData;
        return(
            <BaseLayout >
            <BasePage>
                <p>PROJECT #: { portfolioData.id }</p>
                <h1>TITLE: { portfolioData.title }</h1>
                <p>DESCRIPTION: { portfolioData.body }</p>
            </BasePage>
            </BaseLayout>
        )
    }
}

export default withRouter(PortfolioDetails);