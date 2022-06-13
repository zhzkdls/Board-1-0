import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './component/board/Board';
import BoardWrite from './component/board/BoardWrite';
import BoardDetail from './component/board/BoardDetail';
import BoardEdit from './component/board/BoardEdit';
import Header from './component/Header';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import ForgotPass from './page/ForgotPass';
import Home from './page/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />  
        <Routes>   
          {/* 메인 페이지 */}
          <Route exact path = "/" element = {<Home />} />
          {/* 게시판 */}
          <Route path = "/post" element = {<Board />} />
          <Route path = "/write" element = {<BoardWrite />} />
          <Route path = "/post/:id" element = {<BoardDetail/>} />
          <Route path = "/edit/:id" element = {<BoardEdit />} />
          {/* 로그인 */}
          <Route path= "/SignIn" element={<SignIn />} />
          <Route path= "/SignUp" element={<SignUp />} />
          <Route path= "/ForgotPass" element={<ForgotPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
