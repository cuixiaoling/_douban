import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import book from './modules/book'
import test1 from './modules/test1'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        movie,
        book,
        test1
    }
})
