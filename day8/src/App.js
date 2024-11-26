import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
       <Router>
          <nav>
            <Link to='/'>Login</Link><br/>
            <Link to='/dash'>Dashboard</Link><br/>
          </nav>


        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
