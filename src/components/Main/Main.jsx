import React, { useEffect, useState } from 'react'
import './Main.scss'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import themeColor from '../../theme/themeColor';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Main() {

const style ={
    paper: {position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'},
    field: {width: '80%'},
    btn: {position: 'absolute', right: '2%', bottom: '2%'},
    typography: {fontWeight: 600}
}

const [nameMem, setNameMem] = useState("")
const [addSuccess, setAddSuccess] = useState(false)
const [addUpvote, setAddUpvote] = useState(0)
const [addDownvote, setAddDownvote] = useState(0)
const [addSumVoice, setAddSumVoice] = useState()


useEffect(() => {
    setAddSumVoice(addUpvote + addDownvote)
}, [addUpvote, addDownvote])

console.log(addSumVoice)

const countUpUpvote = () => {
    const newValue = addUpvote + 1
    setAddUpvote(newValue)
}

const countDownUpvote = () => {
    const newValue = addUpvote - 1
    setAddUpvote(newValue)
   
}

const countUpDownvote = () => {
    const newValue = addDownvote + 1
    setAddDownvote(newValue)
  
}

const countDownDownvote = () => {
    const newValue = addDownvote - 1
    setAddDownvote(newValue)
}



const addMemToData = () => {
    setAddSuccess(true)

    setTimeout(() => {
        setAddSuccess(false)
    }, 2000)


}

  return (
    <div className='main'>
        <div className="main__wrapper">
            <div className="main__wrapper-box">
            <Paper 
            style={style.paper}
            elevation={3}>
            <div className="main__wrapper-box--header">
                Dodaj mema
            </div>
            <ThemeProvider theme={themeColor}>
            <TextField 
            error={nameMem.length > 0 && nameMem.length < 5}
            style={style.field}
            value={nameMem}
            onChange={(e) => setNameMem (e.target.value)}
            helperText={nameMem.length > 0 && nameMem.length < 5 ? "Nazwa mema musi miec min 4 znaki" : ""}
            id="outlined-basic" label="Nazwa mema" variant="outlined" />
            
            <div className="main__wrapper-box--voice">
                <Badge badgeContent={addUpvote} color="primary">
                Upvote
                <KeyboardVoiceIcon color="action" />
                
                </Badge>
                
                <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                >
                <Button
                onClick={countUpUpvote}
                >+</Button>
                <Button
                onClick={countDownUpvote}
                >-</Button>
                </ButtonGroup>
            </div>

           <div className="main__wrapper-box--voice">
           <Badge badgeContent={addDownvote} color="primary">
            Downvote
            <KeyboardVoiceIcon color="action" />
            
            </Badge>
            
            <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            >
            <Button
            onClick={countUpDownvote}
            >+</Button>
            <Button
            onClick={countDownDownvote}
            >-</Button>
            </ButtonGroup>
           </div>

            <div className="main__wrapper-box--final">
                <Typography 
                style={style.typography}
                color="primary" mt={2}>{addSumVoice}</Typography>
                <div className="main__wrapper-box--final---under">Final Voice</div>
            </div>
            <Button 
            style={style.btn}
            variant="contained" endIcon={<SendIcon />}
            onClick={addMemToData}
            >
            Dodaj
            </Button>
            </ThemeProvider>    
            </Paper>
            </div>
        </div>

        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={addSuccess} autoHideDuration={6000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                Twój mem został dodany do sekcji: 
                {addSumVoice > 5 ? 
                (
                    <span> HOT</span>
                )
                :
                (
                    <span> REGULAR</span>
                )}
                </Alert>
            </Snackbar>
       </Stack>
    </div>
  )
}
