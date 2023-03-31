import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMem } from '../../store/memSlice'
import { addMem } from '../../store/memSlice';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme/breakpoints'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Memcard from '../../styles/Memcard';
import Card from '@mui/material/Card';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import './Hot.scss'
import Mem from '../../Data/Mem.json'
import themeColor from '../../theme/themeColor';

export default function Hot(props) {

    // const dispatch = useDispatch();
    // const memStatus = useSelector(state => state.mem.status);
    // const mem = useSelector(state => state.mem.mem);
    // const error = useSelector(state => state.mem.error);
    
    // useEffect(() => {
    //     dispatch(fetchMem());
    //   }, [dispatch]);
    
const editLikeUpvote = (name, number, downvotes, img) => {
    const copyMem = [...props.mem]
    const editMem = {
        title: name,
        upvotes: number + 1,
        downvotes: downvotes,
        img: img
    }
    props.setMem(copyMem.map(el => el.title === name ? editMem : el))
   
}


const editDisLikeUpvote = (name, number, downvotes, img) => {
  const copyMem = [...props.mem]
  const editMem = {
      title: name,
      upvotes: number - 1,
      downvotes: downvotes,
      img: img
  }
  props.setMem(copyMem.map(el => el.title === name ? editMem : el))
  console.log(name)
}


const editLikeDownvote = (name, upvotes, number, img) => {
  const copyMem = [...props.mem]
  const editMem = {
      title: name,
      upvotes: upvotes,
      downvotes: number + 1,
      img: img
  }
  props.setMem(copyMem.map(el => el.title === name ? editMem : el))
 
}

const editDisLikeDownvote = (name, upvotes, number, img) => {
  const copyMem = [...props.mem]
  const editMem = {
      title: name,
      upvotes: upvotes,
      downvotes: number - 1,
      img: img
  }
  props.setMem(copyMem.map(el => el.title === name ? editMem : el))
 
}


const style = {
  typography: {fontWeight: 600}
}

  
  return (
    <div>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }} > 
                    <ThemeProvider theme={theme, themeColor}>
                          {
                            props.mem.filter(el => el.upvotes - el.downvotes > 5).map ((el, index) => {
                                return (
                                    <Grid
                                    key={index}
                                    item xs={12} sm={12} lg={4} style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em'}}>
                                    <Memcard>
                                        <Card style={{ position: 'relative', width: '100%', minHeight: '200px' }}>
                                                <div className="card">
                                                  <div className="card__header">
                                                     {el.title}
                                                  </div>
                                                  <div className="card__voice">
                                                  <Box sx={{ width: '50%', textAlign: 'center' }}>
                                                    Upvote {el.upvotes}
                                                    <BottomNavigation
                                                      showLabels
                                                      // value={el.upvotes}
                                                      // onChange={
                                                      //   setSumUpVote(el.upvotes)}
                                                    >
                                                      <BottomNavigationAction 
                                                      onClick={() => editLikeUpvote(el.title, el.upvotes, el.downvotes, el.img)}
                                                      label="like" icon={<FavoriteIcon />} />
                                                      <BottomNavigationAction 
                                                      onClick={() => editDisLikeUpvote(el.title, el.upvotes, el.downvotes, el.img)}
                                                      label="dislike" icon={<FavoriteIcon />} />
                                                    </BottomNavigation>
                                                  </Box>
                                                  <Box sx={{ width: '50%', textAlign: 'center' }}>
                                                    Downvotes {el.downvotes}
                                                    <BottomNavigation
                                                      showLabels
                                                    >
                                                      <BottomNavigationAction 
                                                      onClick={() => editLikeDownvote(el.title, el.upvotes, el.downvotes, el.img)}
                                                      label="like" icon={<FavoriteIcon />} />
                                                      <BottomNavigationAction 
                                                      onClick={() => editDisLikeDownvote(el.title, el.upvotes, el.downvotes, el.img)}
                                                      label="dislike" icon={<FavoriteIcon />} />
                                                    </BottomNavigation>
                                                  </Box>
                                                  </div>
                                                  <div className="card__final">
                                                      <div className="card__final-header">
                                                      <Typography 
                                                        style={style.typography}
                                                        color="primary" mt={2}>{el.upvotes - el.downvotes}</Typography>
                                                        <div className="card__final-header--under">
                                                            Final Voice
                                                        </div>
                                                      </div>
                                                  </div>
                                                </div>
                                                <div>
                                               </div>
                                                
                                        </Card>
                                    </Memcard>
                                    </Grid>
                                )
                            })
                            }
                    </ThemeProvider>
                    </Grid>
        </Box>
    </div>
  )
}
