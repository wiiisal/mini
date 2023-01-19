import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Success from './Success';
function App() {
  const [{user},dispatch]=useStateValue();
  useEffect(()=>{
 const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
dispatch({
  type:"SET_User",user:authUser,
})
      } else {dispatch({
        type:"SET_USER",user:null,
      })}
    });
    return()=>{ unsubscribe()}
  },[])
console.log(user)
  return (
    <>
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/checkout' element={<Checkout/>} ></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/' element={<Navbar/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
        <Route exact path='/Success' element={<Success/>}></Route>
        
      </Routes>
    
    </div>
    </Router>
    </>
  );
}

export default App;
