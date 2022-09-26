import Home from './Home';
import Discover from './Discover';
import Join from './Join';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
