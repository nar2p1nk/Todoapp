const sqlite3 = require('sqlite3');

db = new sqlite3.Database('todo.db',(err)=>{
    if(err){console.error(err.message)}
})



module.exports = db
