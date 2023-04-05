import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import PublicIcon from '@mui/icons-material/Public';
import { ThemeProvider } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Viewcard.scss'

export default function Viewcard(props) {


    const style = {
        setting: {fontSize: '3rem', cursor: 'pointer', zIndex: 10},
    }

    const handlerChngeView= () => {
        if (props.changeView === false) {
            props.setChangeView (true)
        }
        else {
            props.setChangeView (false)
        }
    }

    const [menuLanguage, setMenuLanguage] = useState(null)

    const handlerOpenMenuLanguage = (e) => {
        setMenuLanguage(e.currentTarget)
      };
    
      const handlerCloseMenuLanguage = () => {
        setMenuLanguage(null);
      };

      const handlerChangeLanguagePL = () => {
        setMenuLanguage(null);
        props.setLanguage('pl')
      }

      const handlerChangeLanguageEN = () => {
        setMenuLanguage(null);
        props.setLanguage('en')
      }

      const handlerChangeLanguageDE = () => {
        setMenuLanguage(null);
        props.setLanguage('de')
      }


  return (
    <div className='viewcard'>
        <ThemeProvider theme={props.changeColorLayout}>
            <div className="viewcard__box">
                <SettingsIcon
                style={style.setting}
                onClick={handlerChngeView} 
                color='primary'
                />
                
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handlerOpenMenuLanguage}
                color="inherit"
              >
                <PublicIcon 
                style={style.setting}
                color='primary'
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menuLanguage}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(menuLanguage)}
                onClose={handlerCloseMenuLanguage}
              >
                <MenuItem onClick={handlerChangeLanguagePL}>
                <img 
                className="viewcard__box-img"
                src='/mem_app/img/poland.png' alt="Flaga Polski" />      
                <span className="viewcard__box-text">PL</span>
                </MenuItem>
                <MenuItem onClick={handlerChangeLanguageEN}>
                <img 
                className="viewcard__box-img"
                src='/mem_app/img/unitedkingdom.png' alt="Flaga Wielkiej Brytani" />      
                <span className="viewcard__box-text">EN</span>
                </MenuItem>
                <MenuItem onClick={handlerChangeLanguageDE}>
                <img 
                className="viewcard__box-img"
                src='/mem_app/img/germany.png' alt="Flaga Niemiec" />      
                <span className="viewcard__box-text">DE</span>
                </MenuItem>
              </Menu>
            </div>
        </ThemeProvider>
    </div>
  )
}
