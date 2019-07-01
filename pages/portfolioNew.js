import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage';
import PortfolioAddForm from '../components/portfolioStuff/PortfolioAddForm'

class PortfolioNew extends Component{
    render(){
        return(
            <BaseLayout>
            <BasePage className="portfolio-create-page" title="Create new portfolio">
                <PortfolioAddForm />
            </BasePage>
            </BaseLayout>
        )
    }
}

export default PortfolioNew;