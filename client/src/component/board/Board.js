import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../css/Board.css';
import Moment from "react-moment";

function Board() {

    const url = "http://localhost:5000/api/getAll"

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
        <div className="board_wrap container mx-auto">
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
            {
              post.map(item=> (
                
                <div key={item.id} >               
                  <div className="num" >{item.id}</div>        
                  <div className="title"><Link to ={`/post/${item.id}`}>{item.title}</Link></div>
                  <div className="author">{item.author}</div>
                  <div className="date"><Moment format='YY-MM-DD'>{item.createDate}</Moment></div>
                  <div className="count">{item.count}</div>
                </div>
              ))
            }
            </div>
            <div className="page container">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            </div>

        <div className="bt_wrap">        
          <Link to={'/write'} ><button className='btn btn-primary' > 작성 </button></Link>
          <Link to ={'/'}> <button className='btn btn-secondary'>  취소  </button></Link>
        </div>
      </div>
    </div>
    );
  }
    
export default Board;