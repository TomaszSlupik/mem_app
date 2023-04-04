import React, { useEffect, useState } from 'react'
import './Main.scss'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
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
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import PaletteIcon from '@mui/icons-material/Palette';




const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Main(props) {

const style ={
    paper: {position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'},
    field: {width: '80%'},
    btn: {position: 'absolute', right: '2%', bottom: '2%'},
    btnGroup: {border: '1 px solid'},
    typography: {fontWeight: 600},
    clean: {cursor: 'pointer', fontSize: '2rem'},
    palette: {position: 'absolute', cursor: 'pointer', fontSize: '4rem', top: '-6%' }
}

const [nameMem, setNameMem] = useState("")
const [nameMemError, setNameMemError] = useState(false)
const [addSuccess, setAddSuccess] = useState(false)
const [addError, setAddError] = useState(false)
const [addUpvote, setAddUpvote] = useState(0)
const [addDownvote, setAddDownvote] = useState(0)
const [addSumVoice, setAddSumVoice] = useState()
const [imgMem, setImgMem] = useState("start")

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
        setImgMem("")
        setAddError(true)
        setTimeout(() => {
            setAddError(false)
        }, 1500)
    }
    else if (imgMem === '') {
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
        setNameMem("")
        setAddUpvote(0)
        setAddDownvote(0)
        setImgMem("start")
    }
    
}

const handlerClean = () => {
    setNameMem("")
    setAddUpvote(0)
    setAddDownvote(0)
    setImgMem("start")
}


const addMemToDataBase = (e) => {
    e.preventDefault()
    const newMem = {
        title: nameMem,
        upvotes: addUpvote,
        downvotes: addDownvote,
        img: imgMem
    }

    const allMem = [...props.mem, newMem]
    props.setMem(allMem)
    props.setPrevState(allMem)
}

const handleAddImage = (e) => {
    const fileMem = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(fileMem);
    reader.onload = () => {
        setImgMem(reader.result);
      }
}



const changeThemeColor = () => {
    const newColor = props.changeColorLayout.palette.primary.main === '#9400d3' ? '#008b8b' : '#9400d3'
    props.setChangeColorLayout({
        ...props.changeColorLayout,
        palette: {
            ...props.changeColorLayout.palette,
            primary: {
                ...props.changeColorLayout.palette.primary,
                main: newColor
            }
        },
        components: {
            MuiButton: {
              styleOverrides: {
                root: {
                  '&:hover': {
                    backgroundColor: newColor,
                    color: '#fff'
                  }
                }
              }
            }
          }
    })
}



  return (
    <div className='main'>
        <PaletteIcon 
        onClick={changeThemeColor}
        style={style.palette}/>
        <div className="main__wrapper">
            <div className="main__wrapper-box">
            <Paper 
            style={style.paper}
            elevation={3}>
            <div className="main__wrapper-box--header">
                Dodaj mema
            </div>
            <ThemeProvider theme={props.changeColorLayout}>
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
            <div className="main__wrapper-box--image">
            <IconButton 
            color="primary" aria-label="upload picture" component="label">
                    <input 
                    onChange={handleAddImage}
                    hidden accept="image/*" type="file"  />
                    <div>Dodaj zdjęcie</div>
                    <PhotoCamera />
            </IconButton>
                {
                    imgMem === "start" ?
                    (
                        <div></div>
                    ) :
                    imgMem === "" ?
                    (
                        <div className='main__wrapper-box--image---false'>Wczytaj zdjęcie!</div>
                    )
                    :
                    (
                        <div className='main__wrapper-box--image---true'>Twoje zdjęcie zostało poprawnie wczytane</div>
                    )
                }
            </div>
            <div className="main__wrapper-box--voice">
                <Badge badgeContent={addUpvote} color="primary">
                Upvote
                <KeyboardVoiceIcon color="action" />
                
                </Badge>
                
                <ButtonGroup
                style={style.btnGroup}
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                >
                <Button
                style={style.btnGroup}
                onClick={countUpUpvote}
                >+</Button>
                <Button
                style={style.btnGroup}
                disabled={addUpvote <= 0}
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
            disabled={addDownvote <=0}
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
