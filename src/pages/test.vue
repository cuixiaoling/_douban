<template>
    <div>
        <div class="line1">test:{{ count }}</div>
        <div class="line2">test:{{ count2 }}</div>
        <div v-for="item in doneTodos" :key="item.id">{{item.text}} </div>
        <div>{{doneTodosCount}} </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            // count2:2
            doneTodos:[]
        }
    },
    // 直接挂在computed（计算属性上）
    // computed: {
    //     count () {
    //         return this.$store.state.test1.count
    //     }
    // },
    // 用辅助函数挂到computed
    // computed:mapState({
    //     count:state=>state.test1.count
    // }),
    // 普通计算属性和mapState公用
    computed:{
        doneTodosCount(){
            return this.$store.state.test1.todos.filter(todo =>todo.done).length
        },
        count2(){
            return 3
        },
        ...mapState({
            count:state=>state.test1.count
        })
    },
    created(){
        this.doneTodos = this.$store.getters.doneTodos
        console.log(this.$store.getters.doneTodos)
        console.log(this.doneTodosCount)
    }
}
</script>

