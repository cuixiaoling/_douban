<template>
    <div class="scroller">
       <div class="header">
            <h2>{{title}}</h2>
            <a href="#">更多</a>
       </div>
       <ul class="hasCover" v-if="type=='hasCover'">
           <li v-for="(item,index) in items" :key="index">
               <a href="#">
                <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.jpg" alt="">
                <span class="title">海王</span>
               </a>
           </li>
       </ul>
        <ul class="onlyString" v-if="type=='onlyString'">
            <li v-for="(item,index) in 8" :key="index" style="border-color: #FFAC2D;">
                <a href="#">同时入选IMDB250和豆瓣电影250的电影</a>
            </li>
       </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['title','type','items'],
    methods:{

    },
    created(){

    }
}
</script>
<style scoped>
    .scroller{
        margin-top: 1rem;
    }
    .header{
        display: flex;
        justify-content: space-between;
    }
    .hasCover{
        overflow-x: auto;
        white-space: nowrap;
        text-align: center;
        padding: 0.8rem 0;
    }
    .hasCover li{
        display: inline-block;
        width: 10rem;
        margin-right: 1rem;
    }
    img{
        height: 15rem;
    }
    .onlyString{
        overflow-x:auto;
        white-space: nowrap;
        text-align: center;
        padding: 0.8rem 0;

    }
    .onlyString li{
        font-size: 1.6rem;
        display: inline-block;
        height: 5rem;
        line-height: 5rem;
        padding: 0 2.4rem;
        border: 0.1rem solid rgb(255, 172, 45);
        margin-right: 1rem;
        border-radius: 0.4rem;
    }
    .title {
    display: block;
    margin-top: 1rem;
    line-height: 1.6rem;
    font-size: 1.6rem;
    color: #111;
  }

</style>

