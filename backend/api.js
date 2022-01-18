const express = require('express');
const db = require('./database');
const port = 8080;
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/',(req,res)=>{
    res.json({'message':"ass"})
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
