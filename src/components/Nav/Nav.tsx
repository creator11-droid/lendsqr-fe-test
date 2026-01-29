import React, { useState } from 'react'
import "./css/index.css"
import Switch from "../../assets/images/switch.svg"
import Fadown from "../../assets/images/lightDropdown.svg"
import Home from "../../assets/images/home.svg"
import data from "../../data/data.ts"
import { NavLink } from 'react-router'

const Nav: React.FC = () => {

    
  return (
    <div className='Nav'>
        <div className='Nav_t'> 
            <div className='single'>
                <figure>
                    <img src={Switch} alt="" />
                </figure>
                <div className='s_body'>
                    <p>Switch organisation</p>
                    <figure>
                        <img src={Fadown}/>
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
  )
}

export default Nav