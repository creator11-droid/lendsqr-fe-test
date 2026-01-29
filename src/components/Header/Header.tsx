import React, { useState } from 'react'
import logo from "../../assets/images/logo.svg"
import logo2 from "../../assets/images/union.svg"
import Fasearch from "../../assets/images/searchBar.svg"
import alert from "../../assets/images/notifications.svg"
import dp from "../../assets/images/dp.svg"
import Fadown from "../../assets/images/dropdown.svg"
import "./css/header.css"
import Switch from "../../assets/images/switch.svg"
import Fadown2 from "../../assets/images/lightDropdown.svg"
import Home from "../../assets/images/home.svg"
import data from "../../data/data.ts"
import { NavLink } from 'react-router'
import Dropdown from '../Dropdown/Dropdown'
const Header = () => {
  const [openProfile, setOpenProfile] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className='header'>
       <figure className='header_logo'>
        <img src={logo}/>
       </figure>
       <Dropdown open={openNav} onClose={()=>setOpenNav(false)}
       trigger={
         <figure className='header_logo2'>
    <img src={logo2} onClick={()=> setOpenNav((prev)=>!prev)}/>
       </figure>
       }>
        <div className='Nav'>
          <div className='Nav_t'> 
            <div className='single'>
                <figure>
                    <img src={Switch} alt="" />
                </figure>
                <div className='s_body'>
                    <p>Switch organisation</p>
                    <figure>
                        <img src={Fadown2}/>
                    </figure>
                </div>
            </div>
            <div className='template'>
                <figure>
                    <img src={Home}/>
                </figure>
                <p>Dashboard</p>
            </div>
        </div>
         {
          data.map(item=>(
            <div className='nav_box'> 
            <p className='topic'>{item.Parent} </p>

                 {
                    item.child.map(child=>(
                         <NavLink to={child.link} className="template">
                <figure>
                    <img src={child.picture}/>
                </figure>
                <p>{child.name}</p>
            </NavLink>
                    ))
                 }
            </div>
          ))
        }
        </div>
       </Dropdown>
      
       <div className='header_input'>
        <input/>
        <figure className='search'>
            <img src={Fasearch} />
        </figure>
       </div>
       <div className='header_profile'>
        <div>
           <h1>docs</h1>
        <figure>
            <img src={alert}/>
        </figure> 
        </div>
        <div>
             <figure className='dp'>
            <img src={dp} alt="" />
        </figure>
        <div className='ls_profile'>
          <h3>Adedeji</h3>
        <figure className='drp_dwn'>
            <img src={Fadown} alt="" />
        </figure>   
        </div>
        
        </div>
      
       </div>
       <div className='header_profile2'>
        <Dropdown open={openProfile} onClose={()=>setOpenProfile(false) }
          trigger={
            <figure className='dp' onClick={()=>setOpenProfile((prev)=>!prev)}>
              <img src={dp}/>
            </figure>
          }>
            <ul>
              <li>Adedeji</li>
              <li>docs</li>
              <li><img src={alert}/></li>
            </ul>

        </Dropdown>
       </div>
    </div>
  )
}

export default Header