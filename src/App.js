// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
// import Spinner from './Components/Spinner'
// import Newscards from './Components/Newscards';
function App() {
  return (
    <div>
    <Router>
      <Navbar /> {/* Place the Navbar component inside the Router */}
      <Routes>
        <Route exact path='/general' element={<News pagesize={6} category="general" />} />
        <Route exact path='/entertainment'  element ={<News pagesize={6} category="entertainment" />} />
        <Route exact path='/about'   element={<News pagesize={6} category="about" />} />
        <Route exact path='/business'  element={<News pagesize={6} category="business"  />} />
        <Route exact path='/health'   element={<News pagesize={6} category="health" />} />
        <Route exact path='/sports' element={<News pagesize={6} category="sports" />} />
        <Route exact path='/science'element={<News pagesize={6} category="science" />} />
  <Route exact path='/technology'element={<News pagesize={6} category="technology" />} />
      </Routes> 
    </Router>
  </div>
  );
}

export default App;
