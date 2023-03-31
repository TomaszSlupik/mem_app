import React from 'react'
import Nav from '../Nav/Nav'
import Searchmem from '../Searchmem/Searchmem'
import './Header.scss'

export default function Header(props) {
  return (
    <div className='header'>
        <div className="header__nav">
            <Searchmem 
            searchMem={props.searchMem}
            />
            <Nav />
        </div>
    </div>
  )
}
