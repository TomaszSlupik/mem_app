import React from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'

export default function Header() {
  return (
    <div className='header'>
        <div className="header__nav">
            <Nav />
        </div>
    </div>
  )
}
