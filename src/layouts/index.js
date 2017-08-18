import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css';

const ListLink = props =>
    <li style={{display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default ({children}) =>
    <div style={{margin: `0 auto`,
        maxWidth: 800,
        padding: `1.25rem 1rem`,
    }}>

        <Helmet
            title="About Sergey Tyan"
            meta={[
                { name: 'description', content: 'FullStack Software Developer Bio' },
                { name: 'keywords', content: 'portfolio, javascript, react, react native, ios, java, nodejs, archery, drumming' },
                { name: 'author', content:'Sergey Tyan'}
            ]}
        />

        <header style={{marginBottom: `1.5rem`}}>
            <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
                <h3 style={{display: `inline`}}>yeah boi</h3>
            </Link>
            <ul style={{listStyle: `none`, float: `right`}}>
                <ListLink to="/">Bio</ListLink>
                <ListLink to="/portfolio/">Portfolio</ListLink>
                <ListLink to="/hobbies/">Hobbies</ListLink>
                <ListLink to="/contacts/">Contacts</ListLink>
            </ul>
        </header>
        {children()}
    </div>