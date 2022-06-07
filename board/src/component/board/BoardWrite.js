import React, { useState } from 'react';
import '../../css/Board.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content'

import Swal from 'sweetalert2'

function BoardWrite({handleSubmit}) {
  const navigate = useNavigate();
  const [title, setTitel] = useState('');
  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [text,setText] = useState('');

  const write = withReactContent(Swal)
  
// 언럿=>(구)버젼
  // const onSubmit = (event) =>{    
  //   axios.post("/api/post/add",{
  //     title : title,
  //     author : author,
  //     password : password,
  //     text : text,
  //     count : 0
  //   }).then(
  //     console.log(title),
  //     write.fire("등록되었습니다"),
  //     alert("등록되었습니다"),
  //     navigate("/")
  //   );
  // } 
  
  // sweetalert2 사용
  const onSubmit = (event) =>{    
    axios.post("/api/post/add",{
      title : title,
      author : author,
      password : password,
      text : text,
      count : 0
    }).then(
      console.log(title),
      write.fire({
        title :"등록되었습니다",
        text : "공지사항 페이지로 이동합니다.",
        icon: "success",
      }),
      navigate("/")
    );
  } 


  return ( 
    
    <div className="board_wrap container mx-auto">
      <form onSubmit={onSubmit}>
        <div className="board_title">
          <strong>Q & A</strong>
          <p>문의글 게시판</p>
        </div>
        <div className="board_write_wrap">
          <div className="board_write">
            <div className="title">
              <dl>
                <dt>제목</dt>
                <dd><input type={"text"} value={title} onChange={({target : {value}}) => setTitel(value)} placeholder="제목 입력" ></input></dd>
              </dl>
            </div>
            <div className="info">
            <dl>
                <dt>글쓴이</dt>
                <dd><input type={"text"} value={author} onChange={({target : {value}}) => setAuthor(value)} placeholder="글쓴이 입력"></input></dd>
            </dl>
            <dl>
              <dt>비밀번호</dt>
              <dd><input type={"password"} value={password} onChange={({target : {value}}) => setPassword(value)}placeholder="비밀번호 입력"></input></dd>
            </dl>
            </div>
            <div className="cont">
              <textarea value={text} onChange={({target : {value}}) => setText(value)} placeholder="내용 입력"></textarea>

            </div>
          </div>
          <div className="bt_wrap">
            <button type="submit" className='btn btn-primary' disabled = {!title || !author || !password || !text}> 확인 </button>
            <Link to ={'/'} ><button className='btn btn-secondary'>취소 </button></Link>
          </div>
        </div>
      </form>
      
    </div>
  );
}

export default BoardWrite;