import './App.scss';
import React, { useEffect, useState } from 'react'
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Hot from './components/Hot/Hot';
import { Provider } from 'react-redux';
import store from './store/configureStore'
import Regular from './components/Regular/Regular';
import Footer from './components/Footer/Footer';
import Mem from './Data/Mem.json'
import useTitleWebside from './hook/useTitleWebside';

function App() {

  useTitleWebside("Mem webside")

  const [mem, setMem] = useState([])

  useEffect(() => {
    setMem(Mem)
  }, [Mem])


  const searchMemHot = (input) => {
      const filterData = mem.filter(el => el.title.toLowerCase().includes(input.toLowerCase()))
      setMem(filterData)
  }

  const [prevState, setPrevState] = useState(Mem)

  const backToDataBase = () => {
    setMem(prevState)
}

const editLikeUpvote = (name, number, downvotes, img) => {
  const copyMem = [...mem]
  const editMem = {
      title: name,
      upvotes: number + 1,
      downvotes: downvotes,
      img: img
  }
  setMem(copyMem.map(el => el.title === name ? editMem : el))
  setPrevState(copyMem.map(el => el.title === name ? editMem : el))
}


const editDisLikeUpvote = (name, number, downvotes, img) => {
const copyMem = [...mem]
const editMem = {
    title: name,
    upvotes: number - 1,
    downvotes: downvotes,
    img: img
}
setMem(copyMem.map(el => el.title === name ? editMem : el))
setPrevState(copyMem.map(el => el.title === name ? editMem : el))

}


const editLikeDownvote = (name, upvotes, number, img) => {
const copyMem = [...mem]
const editMem = {
    title: name,
    upvotes: upvotes,
    downvotes: number + 1,
    img: img
}
setMem(copyMem.map(el => el.title === name ? editMem : el))
setPrevState(copyMem.map(el => el.title === name ? editMem : el))

}

const editDisLikeDownvote = (name, upvotes, number, img) => {
const copyMem = [...mem]
const editMem = {
    title: name,
    upvotes: upvotes,
    downvotes: number - 1,
    img: img
}
setMem(copyMem.map(el => el.title === name ? editMem : el))
setPrevState(copyMem.map(el => el.title === name ? editMem : el))
}

  return (
    <div className="App">
        <Router>
          <Header 
          />
          <Routes>
            <Route path='/mem_app' element={<Main
             mem={mem}
             setMem={setMem}
             setPrevState={setPrevState}
            />} />
            <Route path='/mem_app/hot' element={
                <Provider store={store}>
                <Hot 
                 mem={mem}
                 setMem={setMem}
                 setPrevState={setPrevState}
                 searchMemHot={searchMemHot}
                 backToDataBase={backToDataBase}
                 editLikeUpvote={editLikeUpvote}
                 editDisLikeUpvote={editDisLikeUpvote}
                 editLikeDownvote={editLikeDownvote}
                 editDisLikeDownvote={editDisLikeDownvote}
                />
                </Provider>}
              />
            <Route path='/mem_app/regular' element={<Regular 
             mem={mem}
             setMem={setMem}
             setPrevState={setPrevState}
             searchMemHot={searchMemHot}
             backToDataBase={backToDataBase}
             editLikeUpvote={editLikeUpvote}
             editDisLikeUpvote={editDisLikeUpvote}
             editLikeDownvote={editLikeDownvote}
             editDisLikeDownvote={editDisLikeDownvote}
            />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
