
import './App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Routes from './routes';
function App() {
  return (
    <div className="App">
      <Router>
          <ul>
            <li>
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
