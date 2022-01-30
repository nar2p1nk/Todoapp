var m = require('mithril');
var Todos = require('../model/todos')

module.exports = {
    oninit:Todos.loadList,
    view:function(){
        return m('.app',[
            m('h1','Todo app'),
            m('.post',[
                m('form',{action:'http://localhost:8080/',method:'POST'},[
                    m('input',{type:'text'}),
                    m('input',{type:'submit',value:'submit'})
                ])
            ]),
            m('.list',[
                m('h2','Tasks to complete:'),
                m('form',{action:'http://localhost:8080/',method:'POST'},[
                    m('ul',Todos.list.map(function(todo){
                        return m('li',[m('h3',[
                            m('label',{for:'todo'},todo.todo),
                            m('input',{
                                type:'checkbox',name:'todo',value:todo.id})
                        ])])
                    })),
                    m('input',{type:'submit',value:'delete selected tasks'})
                ] )  
            ])
        ])
    }
}
