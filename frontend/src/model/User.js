var m = require('mithril');

var User = {
    list:[],
    loadList:async ()=>{
        return m.request({
            method: 'GET',
            url:'https://rem-rest-api.herokuapp.com/api/users',
            withCredentials:true,
        })
        .then((result)=>{User.list = result.data})
    },
    current:{},
    load:async (id)=>{
        return m.request({
            method: "GET",
            url:'https://rem-rest-api.herokuapp.com/api/users/' + id,
            withCredentials: true,
        })
            .then((result)=>{
                User.current = result
            })
    },
    save:()=>{
        return m.request({
            method:'PUT',
            url:'https://rem-rest-api.herokuapp.com/api/users/' + User.current.id,
            body:User.current,
            withCredentials:true,
        })
    }
}

module.exports = User
