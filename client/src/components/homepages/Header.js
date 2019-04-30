import React from 'react'

 const Header = (props) => {
  return (

    <nav className='nav-bar'>
        <div className='container headercontent'>
            <h1><i className="fas fa-filter"></i>MyGT</h1>
            <ul>
              <li><a href='/Home'>Home</a></li>
              <li><a href='/signin'>sign in</a></li>
              <li><a href='/signup'>sign up</a></li>
              <li><p>{props.firstName}</p></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;