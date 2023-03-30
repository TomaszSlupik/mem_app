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
import './Hot.scss'

import Mem from '../../Data/Mem.json'

export default function Hot() {

    // const dispatch = useDispatch();
    // const memStatus = useSelector(state => state.mem.status);
    // const mem = useSelector(state => state.mem.mem);
    // const error = useSelector(state => state.mem.error);
    
    // useEffect(() => {
    //     dispatch(fetchMem());
    //   }, [dispatch]);
    
  const [mem, setMem] = useState([Mem.filter(el => el.upvotes + el.downvotes > 5)])

  useEffect(() => {
    setMem(Mem.filter(el => el.upvotes - el.downvotes > 5))
  }, [Mem])

const editLikeUpvote = (name, number, downvotes, img) => {
    const copyMem = [...mem]
    const editMem = {
        title: name,
        upvotes: number + 1,
        downvotes: downvotes,
        img: img
    }
    setMem(copyMem.map(el => el.title === name ? editMem : el).filter(el => el.upvotes - el.downvotes > 5))
   
}


const editDisLikeUpvote = (name, number, downvotes, img) => {
  const copyMem = [...mem]
  const editMem = {
      title: name,
      upvotes: number - 1,
      downvotes: downvotes,
      img: img
  }
  setMem(copyMem.map(el => el.title === name ? editMem : el).filter(el => el.upvotes - el.downvotes > 5))
  console.log(name)
}


const editLikeDownvote = (name, upvotes, number, img) => {
  const copyMem = [...mem]
  const editMem = {
      title: name,
      upvotes: upvotes,
      downvotes: number + 1,
      img: img
  }
  setMem(copyMem.map(el => el.title === name ? editMem : el).filter(el => el.upvotes - el.downvotes > 5))
 
}

const editDisLikeDownvote = (name, upvotes, number, img) => {
  const copyMem = [...mem]
  const editMem = {
      title: name,
      upvotes: upvotes,
      downvotes: number - 1,
      img: img
  }
  setMem(copyMem.map(el => el.title === name ? editMem : el).filter(el => el.upvotes - el.downvotes > 5))
 
}

  
  return (
    <div>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }} > 
                    <ThemeProvider theme={theme}>
                          {
                            mem.map ((el, index) => {
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
                                                      // value={value}
                                                      // onChange={(event, newValue) => {
                                                      //   setValue(newValue);
                                                      // }}
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

                                                      </div>
                                                      {el.upvotes - el.downvotes}
                                                      Fianl Voice
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
