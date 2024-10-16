import './App.css';
import Home from './components/home/Home';
import Authenticate from './components/authentication/Authenticate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getstarted" element={<Authenticate />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
