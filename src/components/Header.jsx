import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
         <div className='d-flex justify-content-between align-items-center'>
           
           <div className='logo'>
            <Link to ='/' className='brand'>WSP</Link>
           </div>
           <div className='nav nav-pills'>
           <Link to ='/' className='brand'>Home</Link>
           <Link to ='courses' className='brand'>Courses</Link>
           <Link to ='dashboard' className='brand'>Dashboard</Link>
           <Link to ='about' className='brand'>About</Link>

           </div>
         </div>
      </div>
    </header>
  )
}

export default Header