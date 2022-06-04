import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../css/Board.css';

function Board() {

    const url = "/api/getAll"

    const [post, setPost] = useState([{
        id:""
      }]);  
      
      useEffect(() => {
        axios.get(url)
        .then(Response =>{
          setPost(Response.data)})
          .then()
          .then(console.log('rendering'));
        },[url,post.id]);

    return ( 
        <div className="board_wrap">
        <div className="board_title">
          <strong>Q & A</strong>
          <p>문의글 게시판</p>
        </div>
        <div className="board_list_wrap">
          <div className="board_list">
            <div className="top">
              <div className="num">번호</div>
              <div className="title">제목</div>
              <div className="author">글쓴이</div>
              <div className="date">작성일</div>
              <div className="count">조회</div>
            </div>
           
            </div>
            <div className="board_page">
          <p className="bt first"> {'<<'} </p>
          <p className="bt prev"> {'<'} </p>
          <p className="num on">1</p>
          <p className="num">2</p>
          <p className="num">3</p>
          <p className="num">4</p>
          <p className="num">5</p>
          <p className="bt next"> {'>'} </p>
          <p className="bt last"> {'>>'} </p>
        </div>
        <div className="bt_wrap">        
          <Link to={'/write'} ><button className='on' > 작성 </button></Link>
          <Link to ={'/'}> <button className='off'>  취소  </button></Link>
        </div>
      </div>
    </div>
    );
  }
    
export default Board;