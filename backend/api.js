const express = require('express');
const db = require('./database');
const port = 8080;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors())

var forPost = 'http://127.0.0.1:8000/'

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({'message':"ass"})
})

app.post('/',(req,res)=>{
    todo = req.body.todo
    db.run(`INSERT INTO todos(todo) VALUES(?)`,[todo],(err)=>{
        if(err){res.status(400).send(err.message)}
        else{
            res.redirect(forPost)
            console.log(todo)
        }
    })
})

app.post('/list',(req,res)=>{
    console.log(req.body.todo)
    req.body.todo.map((id)=>{
        db.run(`DELETE FROM todos WHERE id = ?;`,[id],(err)=>{
            if(err){console.log(err.message)}
            else{
                console.log(id)
            }
        })
    })
    res.redirect(forPost)
})

app.get('/api/todo',(req,res)=>{
    db.all(`SELECT * FROM todos`,[],(err,rows)=>{
        if(err){res.status(400).json({'error message':err.message})}
        else{
            res.json({rows})
        }
    })
})


app.listen(port,()=>{
    console.log(`server at port ${port}`)
})
