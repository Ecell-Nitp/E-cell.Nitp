import React from 'react'
import Heading from '../components/Heading'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Events from '../components/Events'
import Team from '../components/Team'
function Home() {
  return (
    <div>
      <Heading/>
      <Welcome/>
      <About/>
      <Events/>
      <Team/>
    </div>
  )
}

export default Home
