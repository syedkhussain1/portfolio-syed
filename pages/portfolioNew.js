import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage';
import PortfolioAddForm from '../components/portfolioStuff/PortfolioAddForm'

class PortfolioNew extends Component{

    submitPortfolio(portfolioData){
        alert(JSON.stringify(portfolioData, null, 2));
    }
    render(){
        return(
            <BaseLayout>
            <BasePage className="portfolio-create-page" title="Create new portfolio">
                <PortfolioAddForm onSubmit={this.submitPortfolio}/>
            </BasePage>
            </BaseLayout>
        )
    }
}

export default PortfolioNew;