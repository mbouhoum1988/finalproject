import React from 'react'

 const Header = (props) => {
  return (

    <nav className='nav-bar'>
        <div className='container headercontent'>
            <h1><i className="fas fa-filter"></i>MyGT</h1>
            <ul>
              <li><a href='/project'>search</a></li>
              <li><a href='/saved'>my places</a></li>
              <li><a href='/' onClick={props.logout}>log out</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;
