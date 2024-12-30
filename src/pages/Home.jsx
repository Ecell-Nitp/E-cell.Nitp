import React from 'react'
import Heading from '../components/Heading'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Events from '../components/Events'
import Team from '../components/Team'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <Heading/>
      <Welcome/>
      <About/>
      <Events/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home
