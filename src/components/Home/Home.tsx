import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import "./css/index.css"
import Nav from '../Nav/Nav'


const Home = () => {
  return (
    <div className='home'>
        <div>
          <Header/>
        </div>
        <div className='home_wrapper'>
           <div className='ls_home'>
            <Nav/>
           </div>
        <div className='rs_home'> 
        <Outlet/>
        </div>
        </div>
       
    </div>
  )
}

export default Home