import React from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'

export default function Header(props) {
  return (
    <div className='header'>
        <div className="header__nav">
            <Nav 
            changeColorLayout={props.changeColorLayout}
            setChangeColorLayout={props.setChangeColorLayout}
            />
        </div>
    </div>
  )
}
