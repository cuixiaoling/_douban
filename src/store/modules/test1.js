import axios from 'axios'
const state = {
    count:1,
    todos:[
        { id: 1, text:'true',done:true},
        { id: 1, text:'false',done:false}
    ]
}
const getters = {
    doneTodos:state => {
        // 过滤器 返回满足条件的新数组
        return state.todos.filter(todo => todo.done)
    }
    
}
const mutations={
    getMovie(state, payload) {
        // switch (payload.tag) {
        //     case 'hotMovies':
        //         state.hotMovies = payload.res
        //         break
        //     case 'newMovies':
        //         state.newMovies = payload.res
        //         break
        //     case 'topMovies':
        //         state.topMovies = payload.res
        //         break
        //     default:
        //         state.hotMovies = payload.res
        // }
    }
}
const actions = {
   getMovie({commit}){
    //    axios.get('/api/v2/movie/in_theaters?count=8').then((res) => {
    //     console.log(res,'列表')
    //        commit({
    //            type: 'getMovie',
    //            tag: 'hotMovies',
    //            res: res.data.subjects
    //        })
    //    })
   }
}
export default {
    state,
    getters,
    mutations,
    actions
}