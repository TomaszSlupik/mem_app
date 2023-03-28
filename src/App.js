import './App.scss';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/mem_app' element={<Main />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
