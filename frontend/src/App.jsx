import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/getstarted/Login';
import Upcoming from './components/displays/Upcoming';
import Timeline from './components/displays/Timeline';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
