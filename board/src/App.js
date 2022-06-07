import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './component/board/Board';
import BoardWrite from './component/board/BoardWrite';
import BoardDetail from './component/board/BoardDetail';
import BoardEdit from './component/board/BoardEdit';
import Header from './component/Header';
import LoginPage from './page/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />  
        <Routes>          
          <Route exact path = "/" element = {<Board />} />
          <Route path= "/login" element={<LoginPage />} />
          <Route path = "/write" element = {<BoardWrite />} />
          <Route path = "/post/:id" element = {<BoardDetail/>} />
          <Route path = "/edit/:id" element = {<BoardEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
