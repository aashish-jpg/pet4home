import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <Router>
          <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}>

          </Route>
        </Routes>
    </Router>
     
    

      

  );
}

export default App;
