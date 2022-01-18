var m = require('mithril')

var TodoList = require('./views/TodoList')

var root = document.body

document.addEventListener("DOMContentLoaded", function(){
m.mount(root,TodoList)
})

