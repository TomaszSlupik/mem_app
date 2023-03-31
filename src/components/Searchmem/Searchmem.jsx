import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Searchinput from '../../styles/Searchinput';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme/breakpoints';

export default function Searchmem(props) {

  const [searchMem, setSearchMem] = useState()

  const handlerInputSearch = (e, searchMem) => {
      e.preventDefault()
      setSearchMem(e.target.value)
      props.searchMem(searchMem)
  }

  return (
    <div>
      <ThemeProvider 
      value={searchMem}
      onChange={handlerInputSearch}
      theme={theme}>
        <Searchinput 
          placeholder='Szukaj mema'
          />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
      </ThemeProvider>
    </div>
  )
}
