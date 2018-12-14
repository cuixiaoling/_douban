<template>
  <div class="home-view">
    <div class="sub-nav">
      <div class="quick-nav">
        <span class="item">影院热映</span>
        <span class="item">欧美新碟榜</span>
      </div>
      <div class="quick-nav">
        <span class="item">注册账号</span>
        <span class="item">登录豆瓣</span>
      </div>
    </div>
    <!-- 列表内容 -->
    <div class="list">
      <a :href="item.adapt_url" v-for="(item,index) in list" :key="index">
        <div class="thumbnail">
          <div class="unit">
            <div>
              <h3>{{item.title}}</h3>
              <p>展览信息展览时间：{{item.begin_time}} – {{item.end_time}}</p>
            </div>
            <img :src=item.image></img>
          </div>
          <div class="unit" style="margin-top:1rem ">
            <p>{{item.category_name}}</p>
            <p>{{'本活动来自栏目：'+item.subcategory_name}}</p>
          </div>
        </div>
      </a>
    </div>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
  </div>
 
</template>

<script>
import axios from 'axios'
import api from '@/api/index'
import InfiniteLoading from 'vue-infinite-loading';
console.log(api)
export default {
  name: 'HelloWorld',
  components:{
    InfiniteLoading
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[],
      start:0,
      count:3,
      total:0,
    }
  },
  methods:{
    onInfinite() {
      setTimeout(() => {
        this.start = this.start+3
        this.moreList()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      }, 1000);
      },
    moreList(){
       axios.get(`/api/v2/event/list?loc=108288&start=${this.start}&count=3`).then((e)=>{
       this.list =[ ...this.list,...e.data.events]
       this.total= e.data.total
       console.log(this.list)
      })
    },
    more(){
      this.start = this.start+3
      this.moreList()
    }
  },
  created(){
    // this.moreList();
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-view{
  margin-top: 4.8rem;
}
.sub-nav{
  font-size: 1.5rem;
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
.quick-nav{
  text-align: center;
  margin-top: 0.2rem;
}
.item{
  box-sizing: border-box;
  display: inline-block;
  width: 49%;
  font-size: 1.5rem; 
  padding: 1.2rem 0;
  background-color: #f6f6f6;
  color: #494949;
  border-radius: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  cursor: pointer;
}
.thumbnail{
  margin-left:1.8rem;
  padding: 2.5rem 1.8rem 2.5rem 0;
  border-bottom: 0.1rem solid #e3e3e3; 
}
.thumbnail .unit{
  display: flex;
  justify-content: space-between;

}
.thumbnail h3{
  margin-bottom: 0.6rem;
  line-height: 1.41;
  text-align: justify;
  font-size: 1.7rem;
  font-weight: 500;
  color: #494949;
}
.thumbnail p{
  color: #aaa;
}
.thumbnail img{
  width: 25.6%;
  height: 8.678rem;
  margin-left: 2.5rem;
}
</style>
