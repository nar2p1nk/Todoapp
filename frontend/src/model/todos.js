var m = require('mithril')

var Todos ={
    list:[],
    loadList:async function(){
        return m.request({
            method: "GET",
            url: "http://127.0.0.1:8080/api/todo",
            withCredentials:false,
        })
            .then(function(results){
                Todos.list = results.rows
                console.log(Todos.list)
            })
    }
}

module.exports = Todos
