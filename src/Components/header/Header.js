import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { BsMoonStarsFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import '../../style/Header.css';

const Header = ({isDark, setDark, setLight}) => {
  return (
    <div className='header'>
        <div className='label'>
            <p className='marker'>MARKER</p>
            <p className='org'>SyncArena</p>
        </div>
        <div> 
            {isDark ? 
              <FaMoon className='header-icon mode-icon moon-icon' onClick={setLight}/>
              : 
              <BsBrightnessHighFill className='header-icon mode-icon' onClick={setDark}/> 
            }
            <a href='https://github.com/Sync-Arena/Marker' target='_blank'>
              <FaGithub  className='header-icon github-icon'/>
            </a>
        </div>
    </div>
  )
}

export default Header