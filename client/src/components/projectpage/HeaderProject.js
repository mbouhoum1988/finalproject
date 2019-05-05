import React from 'react'

 const Header = (props) => {
  return (

    <nav className='nav-bar'>
        <div className='headercontent'>
            <h1><i className="fas fa-filter"></i>Plus +</h1>
            <ul>
              <li><a href='/project'>Search</a></li>
              <li><a href='/saved'>My Places</a></li>
              <li><a href='/' onClick={props.logout}>Log Out</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;
