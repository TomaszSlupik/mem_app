import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { ThemeProvider } from '@emotion/react';

export default function Viewcard(props) {


    const style = {
        setting: {position: 'absolute', top: '1.5%', let: '1%', fontSize: '3rem', cursor: 'pointer'}
    }

    const handlerChngeView= () => {
        if (props.changeView === false) {
            props.setChangeView (true)
        }
        else {
            props.setChangeView (false)
        }
    }

  return (
    <div>
        <ThemeProvider theme={props.changeColorLayout}>
            <SettingsIcon
            onClick={handlerChngeView} 
            color='primary'
            style={style.setting}/>
        </ThemeProvider>
    </div>
  )
}
