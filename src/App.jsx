import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navigation from './pages/Navigation'
import Footbar from './pages/Footbar'
import Developers from './pages/Developers'

function App() {
  return (
    <HashRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Developers" element={<Developers />} /> */}
      </Routes>

      <Footbar />
    </HashRouter>
  )
}

export default App
