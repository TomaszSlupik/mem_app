import {styled} from '@mui/system';


const Memcard = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        width: '345px', 
        minHeight: '200px',  
        marginTop: '0.8em'
    }, 
    [theme.breakpoints.up('sm')] : {
        width: '345px', 
        minHeight: '200px', 
        marginTop: '0.8em'
    }, 
    [theme.breakpoints.up('md')] : {
        width: '345px', 
        minHeight: '200px', 
        margin: '0.8em 0.8em'
    }, 
    [theme.breakpoints.up('lg')] : {
        width: '345px', 
        minHeight: '200px', 
        margin: '0.8em 0.8em'
    }, 
    [theme.breakpoints.up('xl')] : {
        width: '550px', 
        minHeight: '200px', 
        margin: '0.8em 0.8em'
    }, 
    [theme.breakpoints.up('xxl')] : {
        width: '500px', 
        minHeight: '200px', 
        margin: '0.8em 0.8em'
    }, 

}))

export default Memcard