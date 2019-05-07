import React from 'react'

 const Header = (props) => {
  return (

    <nav className='nav-bar'>
        <div className='headercontent'>
            <h1><i className="fas fa-filter"></i>Plus+</h1>
            <ul>
              <li><a href='/Home'>Home</a></li>
              <li><a href='/signin'>Login</a></li>
              <li><a href='/signup'>Sign up</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;
