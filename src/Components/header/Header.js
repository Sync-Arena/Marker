import React from 'react'
import { MdLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import './Header.css'

const Header = ({isDark, setDark, setLight}) => {
  return (
    <div className='header'>
        <div className='label'>
            <p className='marker'>MARKER</p>
            <p className='org'>sync arena</p>
        </div>
        <div> 
            {isDark ? 
              <MdLightMode className='header-icon mode-icon' onClick={setLight}/> 
              : 
              <FaMoon className='header-icon mode-icon' onClick={setDark}/>
            }
            <a href='https://github.com/Sync-Arena/Marker' target='_blank'>
              <FaGithub className='header-icon'/>
            </a>
        </div>
    </div>
  )
}

export default Header