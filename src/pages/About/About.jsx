import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <div>
        <Helmet>
            <meta property="og:title" content="บ้านเสนาโซลาร์" data-rh="true"/>
            <meta property="og:description" content="ปลี่ยนพลังงานแสงอาทิตย์ ช่วยให้คุณประหยัดค่าไฟและยังรักษ์โลก โดยช่วยลดก๊าซ CO2 อีกด้วย" data-rh="true"/>
            <meta property="og:image" content="./Artboard.jpg" data-rh="true"/>
        </Helmet>
        <center>About Page</center>
    </div>
  )
}

export default About