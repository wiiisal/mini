import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import {Search2Icon} from '@chakra-ui/icons'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import Home from './Home';
import auth from './firebase'


export default function Navbar() {
  const [{basket,user}]=useStateValue();
  const login=()=>{
    if(user){
      auth.signOut()
    }
  }
  return (
    <>
    <nav className='navbar'>

      <Link to='/'>
        <img className='navbar_logo' src='https://cdn.shopify.com/s/files/1/0656/6779/3127/files/2mini_logo.jpg?v=1658934969' alt='logo' />
      </Link>

      <div className='searchbar'>
        <input className='navbar_search'/>
        <Search2Icon/>
      </div>

      <div className='header_nav'>
        <Link to={!user &&'./login'} className='header_link'>
          <div onClick={login} className='header_option'>
            <span className='option1'>hello{user?.email}</span>
            <span className='option2'>{user?'sign out':'Sign in'}</span>
          </div>
        </Link>
        <Link to='./Contact' className='header_link'>
          <div className='header_option'>
            <span className='option1'>contactez</span>
            <span className='option2'>nous</span>
          </div>
        </Link>
        <Link to='./checkout' className='header_link'>
          <div className='header_optionbag'>
            <span className='option2 basketcount'>{basket.length}</span>
            <ShoppingBasketIcon/>
          </div>
        </Link>

      </div>
    </nav>
    <Home/>
    </>
  )
}
