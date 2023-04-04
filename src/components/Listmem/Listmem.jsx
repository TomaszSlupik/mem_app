import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Listmem.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Listmem(props) {


  const [memOpen, setMemOpen] = useState (false)
  const handlerOpenMem = () => {
      setMemOpen(true)
  }

  const handlerCloseMem = () => {
    setMemOpen(false)
  }

  return (
          <>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '2em', marginLeft: '1em' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.title} src={props.img} />
        </ListItemAvatar>
        <ListItemText
          primary={props.title}
          secondary={
            <React.Fragment>
                <div className="listmem">
                      
                      <div className="listmem__btnGroup">
                        <div className="listmem__btnGroup-box">
                        Upvote {props.upvotes}
                        <ButtonGroup
                          disableElevation
                          variant="contained"
                          aria-label="Disabled elevation buttons"
                          >
                          <Button
                          >+</Button>
                          <Button
                          >-</Button>
                          </ButtonGroup>
                        </div>
                        <div className="listmem__btnGroup-box--second">
                        Downvotes  {props.downvotes}
                        <ButtonGroup
                          disableElevation
                          variant="contained"
                          aria-label="Disabled elevation buttons"
                          >
                          <Button
                          >+</Button>
                          <Button
                          >-</Button>
                          </ButtonGroup>
                        </div>
                      </div>
                    <Button
                    variant='outlined'
                    onClick={handlerOpenMem}
                    >Zobacz</Button>
                </div>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </List>
      <Dialog
          open={memOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handlerCloseMem}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <img style={{width: '100%', height: '300px'}} src={props.img} alt={props.title} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
            variant='contained'
            onClick={handlerCloseMem}>Zamknij</Button>
          </DialogActions>
      </Dialog>
      </>
  )
}
