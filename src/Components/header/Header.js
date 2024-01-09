import React from 'react'
import './Header.css'
import { GitHub, LightMode } from '../icons'

const Header = () => {
  return (
    <div className='header'>
        <div className='label'>
            <p className='marker'>MARKER</p>
            <p className='org'>sync arena</p>
        </div>
        <div> 
            <span className='header-icon'><LightMode /></span>
            <a href='https://github.com/Sync-Arena/Marker' className='header-icon' target='_blank'><GitHub /></a>
        </div>
    </div>
  )
}

export default Header
