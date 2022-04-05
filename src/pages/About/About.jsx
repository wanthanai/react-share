import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <div>
        <Helmet>
            <meta property="og:title" content="title lorem ipsum" data-rh="true"/>
            <meta property="og:description" content="description lorem ipsum" data-rh="true"/>
            <meta property="og:image" content="./Artboard.jpg" data-rh="true"/>
        </Helmet>
        <center>About Page</center>
    </div>
  )
}

export default About