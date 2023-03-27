import { styled } from '@mui/system';

const MyLink = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.9rem',
       
    },
    [theme.breakpoints.up('sm')] : {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')] : {
        fontSize: '2.8rem',
    }
  }))

export default MyLink