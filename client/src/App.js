import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import Checkout from './Checkout'

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/checkout' element={<Checkout/>} ></Route>
        <Route exact path='/login' element={<h1>home page</h1>}></Route>
        <Route exact path='/' element={<Navbar/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
        
      </Routes>
    
    </div>
    </Router>
    </>
  );
}

export default App;
