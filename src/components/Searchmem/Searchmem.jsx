import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Searchinput from '../../styles/Searchinput';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme/breakpoints';


export default function Searchmem(props) {

  const [searchMem, setSearchMem] = useState("")

  const handlerInputSearch = (e) => {
      setSearchMem(e.target.value)
      props.searchMemHot(searchMem)
  }

  const backToAllMem = (e) => {
    if (e.key === 'Backspace') {
      props.backToDataBase()
    }
  }

 
  return (
    <div>
      <ThemeProvider 
      theme={theme}>
        <Searchinput
        onKeyDown={backToAllMem} 
         value={searchMem}
         onChange={handlerInputSearch}
          placeholder='Szukaj mema'
          />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
      </ThemeProvider>
    </div>
  )
}
