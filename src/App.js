import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element ={<Navbar/>}>
          </Route>
        </Routes>
    </Router>
     
    

      

  );
}

export default App;
