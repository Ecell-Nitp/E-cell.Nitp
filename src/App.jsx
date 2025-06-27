
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import EventDesc from './pages/EventDesc'
import AllEvents from './pages/AllEvents';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/event/:id" element={<EventDesc />} />
          <Route path='/allevents' element={<AllEvents/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
