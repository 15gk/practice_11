import React from 'react';
import {Link} from "react-router-dom";
import COURSES from '../data/data.js';

const Courses = () => {
  return (
   <main>
    <div className='pg-header'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7'>
            <h1>Courses</h1>
          </div>
          <div className='col-lg-5'>
            <nav>
              <ol className='breadcrumb justify-content-end'>
                <li className='breadcrumb-item'>
                  <Link to ='/'>Home </Link>
                </li>
                <li className='breadcrumb-item'>Courses</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className='container content'>
      <div className='row products-row'>
        {COURSES.map((course) =>{
          return(
            <div className='col-lg-4' key={course.id}>

              <div className='card'>
                <div className='img-wrap'>
                  <img src={course.image} alt="no photos"/>
                </div>
                <div className='card.body'>
                  <h5 className='card-title'>{course.name}</h5>
                  <p>{course.details}</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <span>Price : <strong>{course.price}</strong></span>
                    <Link to ={'./products/$p{product.id}'} className='btn btn-primary btn-sm'>Details &#8594;</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   </main>
  )
}

export default Courses