import React from 'react'
import Navbar from './Navbar'

const Header = ({user}) => {
  
  return (
    <>


    
   
    <div className='header-container'>
    <h1>
      Seans' Mess Hall
    </h1>
    </div>
    <Navbar user={user}/>
    
    </>
  )
}

export default Header