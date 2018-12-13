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
      <div class="thumbnail" v-for="item in 4">
        <div class="unit">
         <div>
           <h3>西方绘画500年——东京富士美术馆馆藏作品展</h3>
           <p>展览信息展览时间：2018年10月23日 – 2018年12</p>
         </div>
         <img src="https://img3.doubanio.com/pview/event_poster/hlarge/public/8f541cd80791d1e.jpg"></img>
       </div>
        <p>展览</p>
      </div>
      
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
}
.thumbnail{
  margin-left:1.8rem;
  padding: 2.5rem 1.8rem 2.5rem 0;
  border-bottom: 0.1rem solid #e3e3e3; 
}
.thumbnail .unit{
  display: flex;

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
