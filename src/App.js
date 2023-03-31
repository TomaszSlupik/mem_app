import './App.scss';
import React, { useEffect, useState } from 'react'
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


  const [memRegular, setMemRegular] = useState()
  const [memHot, setMemHot] = useState([])

  useEffect(() => {
    setMemHot(mem.map(el => el).filter(el => el.upvotes - el.downvotes > 5))
    setMemRegular (mem.map(el => el).filter(el => 5 >= el.upvotes - el.downvotes))
  }, [mem])

  const searchMem = (input) => {
      console.log(input)
  }

  return (
    <div className="App">
        <Router>
          <Header 
          searchMem={searchMem}
          />
          <Routes>
            <Route path='/mem_app' element={<Main
             mem={mem}
             setMem={setMem}
            />} />
            <Route path='/mem_app/hot' element={
                <Provider store={store}>
                <Hot 
                 mem={mem}
                 setMem={setMem}
                />
                </Provider>}
              />
            <Route path='/mem_app/regular' element={<Regular 
             mem={mem}
             setMem={setMem}
            />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
