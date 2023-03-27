import './App.scss';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;