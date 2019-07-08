import Header from '../shared/Header'
import Head from 'next/head';

const BaseLayout = (props) => {
    
    return (
        <React.Fragment>
        <Head>
            <title>Syed Hussain</title>
            <script src="https://kit.fontawesome.com/4759c905fd.js"></script>
        </Head>
        <div className="layout-container">
            <Header />
            <main className={`cover ${props.className}`}>
                <div className="wrapper">
                    { props.children }
                </div>
            </main>
        </div>
        </React.Fragment>
        
    )
}

export default BaseLayout;