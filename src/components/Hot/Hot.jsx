import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMem } from '../../store/memSlice'

export default function Hot() {

    const dispatch = useDispatch();
    const memStatus = useSelector(state => state.mem.status);
    const mem = useSelector(state => state.mem.mem);
    const error = useSelector(state => state.mem.error);
    
    console.log(mem.data)


    useEffect(() => {
        dispatch(fetchMem());
      }, [dispatch]);
    


  return (
    <div>
        Hot
         {/* {
            mem.data.map ((el, index) => {
                return (
                    <div>
                        {el.title}
                        <img src={process.env.PUBLIC_URL + el.img} alt="" />
                    </div>
                )
            })
        }  */}
        
    </div>
  )
}
