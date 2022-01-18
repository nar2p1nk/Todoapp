var m = require('mithril');
var Todos = require('../model/todos')

module.exports = {
    oninit:Todos.loadList,
    view:function(){
        return m('todo-list',Todos.list.map(function(todo){
            return m('todo-item',[
                m('p',`${todo.todo}`)
            ])
        }))
    }
}
