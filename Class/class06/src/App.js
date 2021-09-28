
import './App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Routes from './routes';
function App() {
  return (
      <Router className="App">      
      <ul>
            <li>
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/dashboard">dashboard</Link>
            </li>
      </ul>
      <Routes></Routes>
      </Router>
  );
}

export default App;
