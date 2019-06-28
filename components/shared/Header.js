import React, { Component } from 'react'
import Link from 'next/link';
import '../../styles/main.scss'

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/portfolio">
                    <a>Portfolio</a>
                </Link>
                <Link href="/blogs">
                    <a>Blogs</a>
                </Link>
                <Link href="/resume">
                    <a>Resume</a>
                </Link>
            </React.Fragment>
        )
    }
}

export default Header;