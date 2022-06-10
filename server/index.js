const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'board'
});

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true})) 

// 화면에 보이기하기 위해 사용
app.get("/api/getAll", (req, res) => {
    const sqlSelect = 
    "SELECT * FROM board_ex VALUES (?, ?, ?, ?)"
    db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send("불러오기 성공???");
    });
});

app.post("/api/post/add", (req, res) => {

    const title = req.body.title;
    const author = req.body.author;
    const password = req.body.password;
    const text = req.body.text;
  
  
    const sqlInsert = 
    "INSERT INTO board_ex (title, author, password, text) VALUES (?, ?, ?, ?)"
    db.query(sqlInsert, [title, author, password, text], (err, result) => {
    console.log(result);
    res.send("등록 성공???");
    });
  });


//터미널에서 작동하는지 확인
app.listen(5000, () => {
    console.log("잘되는거 맞지?!아마");
  });