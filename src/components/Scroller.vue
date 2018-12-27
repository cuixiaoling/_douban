<template>
    <div class="scroller">
       <div class="header">
            <h2>{{title}}</h2>
            <a href="#">更多</a>
       </div>
       <ul class="hasCover" v-if="type=='hasCover'">
           <li v-for="(item,index) in items" :key="index">
                <router-link :to="'subject/' + item.id" append>
                    <img :src="item.images.large" alt="">
                    <span class="title">{{item.title}}</span>
                </router-link>
           </li>
       </ul>
        <ul class="onlyString" v-if="type=='onlyString'">
            <li v-for="(item,index) in items" :key="index" style="border-color: rgb(255, 172, 45);">
                <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
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
<style scoped lang="scss" >
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
    // .title {
    //     display: block;
    //     margin-top: 1rem;
    //     line-height: 1.6rem;
    //     font-size: 1.6rem;
    //     color: #111;
    // }
    .title{
        display: block;
        max-width: 100%;
        margin-top: 1rem;
        line-height: 1.6rem;
        font-size: 1.6rem;
        color: #111;
        overflow: hidden;
        text-overflow: ellipsis; /* 文本溢出：省略*/
        white-space: nowrap; /* 不换行 */
    /* word-wrap: normal; */
    }
    .onlyString {
        overflow-x: auto;
        white-space: nowrap;

        li {
            display: inline-block;
            margin: 0 0 0.8rem 1.6rem;
            font-size: 1.6rem;
            border: solid 0.1rem;
            border-radius: 0.4rem;
            vertical-align: middle;
        }

        a {
            height: 5rem;
            line-height: 5rem;
            padding: 0 2.4rem;
            letter-spacing: 0.16rem;
            overflow: auto;
            display: block;
            text-align: center;
        }

        li:empty { /* 空元素选择器*/
            width: 100%;
            display: block;
            height: 0.1rem;
            border: 0;
            margin: 0;
        }
}
</style>

