import './App.scss';
import React, { useEffect, useState } from 'react'
import Main from './components/Main/Main';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import themeColor from './theme/themeColor';
import Header from './components/Header/Header';
import Hot from './components/Hot/Hot';
import { Provider } from 'react-redux';
import store from './store/configureStore'
import Regular from './components/Regular/Regular';
import Footer from './components/Footer/Footer';
import Mem from './Data/Mem.json'
import useTitleWebside from './hook/useTitleWebside';
import { IntlProvider } from 'react-intl';
import translationsPL from './language/polishTranslation.json'
import translationsEN from './language/englishTranslation.json'
import translationsDE from './language/germanyTranslation.json'

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


const [changeColorLayout, setChangeColorLayout] = useState(themeColor)
const [changeView, setChangeView] = useState(false)

const [language, setLanguage] = useState('pl')

  return (
    <div className="App">
      <IntlProvider locale={language} messages={language === 'pl' ? translationsPL : language === 'en' ? translationsEN : language === 'de' ? translationsDE : translationsPL}>
        <Router>
          <Header 
            changeColorLayout={changeColorLayout}
            setChangeColorLayout={setChangeColorLayout}
          />
          <Routes>
            <Route path='/mem_app' element={<Main
             mem={mem}
             setMem={setMem}
             setPrevState={setPrevState}
             changeColorLayout={changeColorLayout}
             setChangeColorLayout={setChangeColorLayout}
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
                 changeColorLayout={changeColorLayout}
                 setChangeColorLayout={setChangeColorLayout}
                 changeView={changeView}
                 setChangeView={setChangeView}
                 language={language}
                 setLanguage={setLanguage}
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
             changeColorLayout={changeColorLayout}
             setChangeColorLayout={setChangeColorLayout}
             changeView={changeView}
             setChangeView={setChangeView}
             language={language}
             setLanguage={setLanguage}
            />} />
          </Routes>
          <Footer
          changeColorLayout={changeColorLayout}
          setChangeColorLayout={setChangeColorLayout}
          />
        </Router>
        </IntlProvider>
    </div>
  );
}

export default App;
