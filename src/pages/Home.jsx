import React from 'react'
import Heading from '../components/Heading'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Events from '../components/Events'
import Team from '../components/Team'
import Footer from '../components/Footer'
import {latestEvents} from '../store/eventlist'
function Home() {
  return (
    <div>
      <Heading/>
      <Welcome/>
      <About/>
      <Events eventlist={latestEvents} showAll={true}/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home
