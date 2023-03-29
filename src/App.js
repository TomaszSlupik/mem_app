import './App.scss';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hot from './components/Hot/Hot';
import { Provider } from 'react-redux';
import store from './store/configureStore'

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/mem_app' element={<Main />} />
            <Route path='/mem_app/hot' element={
                <Provider store={store}>
                <Hot />
                </Provider>}
              />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
