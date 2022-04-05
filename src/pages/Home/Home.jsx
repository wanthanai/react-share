import React from 'react'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
        <Helmet>
            <title>Solar</title>
            <meta name="description" content="Helmet application" />
            <meta property="og:title" content="A Step-by-Step Guide to Setting Up Selenium-webdriver with Node.js" data-rh="true"/>
            <meta property="og:description" content="A dummies guide to getting up and running with selenium-webdriver" data-rh="true"/>
            <meta property="og:image" content="https://miro.medium.com/max/812/1*1xhuVp8f2WFUGUByHS8VTg.png" data-rh="true"/>
        </Helmet>

        <center>Home Page</center>
    </div>
  )
}

export default Home