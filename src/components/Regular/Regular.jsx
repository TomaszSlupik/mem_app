import React from 'react'
import FormMem from '../FormMem/FormMem'
import Searchmem from '../Searchmem/Searchmem'
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import themeColor from '../../theme/themeColor';
import theme from '../../theme/breakpoints';


export default function Regular(props) {
  return (
    <div>
      <div className="searchmem">
      <Searchmem 
      mem={props.mem}
      setMem={props.setMem}
      searchMemHot={props.searchMemHot}
      backToDataBase={props.backToDataBase}
      />
      </div>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }} > 
                    <ThemeProvider theme={theme, props.changeColorLayout}>
        {
          props.mem.filter(el => 5 >= el.upvotes - el.downvotes).map((el, index) => {
            return (
              <FormMem 
              index={index}
              title={el.title}
              upvotes={el.upvotes}
              downvotes={el.downvotes}
              img={el.img}
              editLikeUpvote={props.editLikeUpvote}
              editDisLikeUpvote={props.editDisLikeUpvote}
              editLikeDownvote={props.editLikeDownvote}
              editDisLikeDownvote={props.editDisLikeDownvote}
              />
            )
          })
        }
        </ThemeProvider>
          </Grid>
        </Box>
    </div>
  )
}
