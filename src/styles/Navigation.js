import { styled } from '@mui/system';

const Navigation = styled('span')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
      fontSize: '1.5rem', 
      margin: '0.5em',
     
    },
    [theme.breakpoints.up('sm')] : {
      fontSize: '2rem', 
    },
    [theme.breakpoints.up('md')] : {
      fontSize: '3rem', 
    }
  }))

export default Navigation