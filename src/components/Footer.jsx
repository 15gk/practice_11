import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='container'>
         <div className='d-flex justify-content-between align-items-center'>
           <div className='nav nav-pills'>
           <Link to ='/' className='brand'>Home</Link>
           <Link to ='courses' className='brand'>Courses</Link>
           <Link to ='dashboard' className='brand'>Dashboard</Link>
           <Link to ='about' className='brand'>About</Link>

           </div>
         </div>
      </div>
      </footer>
  )
}

export default Footer