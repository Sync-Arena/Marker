import React from 'react'
import { MdLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
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
              <FaMoon className='header-icon mode-icon' onClick={setLight}/>
              : 
              <MdLightMode className='header-icon mode-icon' onClick={setDark}/> 
            }
            <a href='https://github.com/Sync-Arena/Marker' target='_blank'>
              <FaGithub className='header-icon github-icon'/>
            </a>
        </div>
    </div>
  )
}

export default Header