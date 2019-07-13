import Header from '../shared/Header'
import Head from 'next/head';
import link from 'next/dist/lib/link';

const BaseLayout = (props) => {
    
    return (
        <React.Fragment>
        <Head>
            <title>{ props.title }</title>
            <meta name="description" content="My name is Syed Hussain and I am an experienced software engineer and web developer.
             I have several years of experience working in very challenging and wide range 
             of technologies from software development, SQL development, developing test automation for web apps/API , android developer and 
             web applications development in React and django. Throughout my career, I have acquired advanced technical knowledge and challenged 
             myself to deliver solid products for client and in-house development. Please take a look around my website and connect with me."
             />
             <meta name="keyword" content="syed hussain, syed portfolio, syed software developer, syed profile" />
             <meta property="og:title" content="Syed Hussain - developer, programmer, traveller"/>
             <meta property="og:locale" content="en_EU"/>
             <meta property="og:url" content="http://localhost:3000"/>
             <meta property="og:type" content="website"/>
             <meta property="og:description" content="My name is Syed Hussain and I am an experienced software engineer and web developer."/>
             <link rel="icon" type="image/ico" href="/static/favicon.ico" />

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