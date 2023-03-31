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
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Main(props) {

const style ={
    paper: {position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'},
    field: {width: '80%'},
    btn: {position: 'absolute', right: '2%', bottom: '2%'},
    typography: {fontWeight: 600},
    clean: {cursor: 'pointer', fontSize: '2rem'}
}

const [nameMem, setNameMem] = useState("")
const [nameMemError, setNameMemError] = useState(false)
const [addSuccess, setAddSuccess] = useState(false)
const [addError, setAddError] = useState(false)
const [addUpvote, setAddUpvote] = useState(0)
const [addDownvote, setAddDownvote] = useState(0)
const [addSumVoice, setAddSumVoice] = useState()

const MIN_INPUT_NAME_MEM = 4
const MAX_INPUT_NAME_MEM = 30

useEffect(() => {
    setAddSumVoice(addUpvote - addDownvote)
}, [addUpvote, addDownvote])


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

const handlerInputMem = (e) => {
    setNameMem(e.target.value)
    if (e.length < MAX_INPUT_NAME_MEM) {
        setNameMem(e)
    }
}

const validationInput = (value) => {
    const validvalue = value && value.replace (/\s{2,}/g, '')
        if (value !== validvalue) {
            setNameMem(validvalue)
        }
    const errValue = !validvalue || validvalue.length < MIN_INPUT_NAME_MEM
    setNameMemError(errValue)
    return errValue
}

const handlerAccept = (e) => {
    e.preventDefault()
    if (nameMem === "" || nameMemError === true) {
        setAddError(true)
        setTimeout(() => {
            setAddError(false)
        }, 1500)
    }

    else {
        addMemToDataBase(e)
        setAddSuccess(true)
        setTimeout(() => {
            setAddSuccess(false)
        }, 1500)
    }
    
}

const handlerClean = () => {
    setNameMem("")
    setAddUpvote(0)
    setAddDownvote(0)
}


const addMemToDataBase = (e) => {
    e.preventDefault()
    const newMem = {
        title: nameMem,
        upvotes: addUpvote,
        downvotes: addDownvote,
        img: "nic"
    }

    const allMem = [...props.mem, newMem]
    props.setMem(allMem)

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
            <div className="main__wrapper-box--clean"
            onClick={handlerClean}
            >
                Wyczyść
                    < CleaningServicesIcon
                    style={style.clean}
                    color='primary'
                    />
            </div>
            <TextField 
            value={nameMem}
            error={nameMemError}
            helperText={nameMemError ? "Nazwa mema musi mieć min. 4 znaki" : ""}
            onChange={handlerInputMem}
            style={style.field}
            onBlur={() => validationInput(nameMem)}
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
            onClick={handlerAccept}
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

       <Stack spacing={2} sx={{ width: '100%'}}>
            
            <Snackbar open={addError} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                Wypełnij poprawnie formularz
                </Alert>
            </Snackbar>
       </Stack>
    </div>
  )
}
