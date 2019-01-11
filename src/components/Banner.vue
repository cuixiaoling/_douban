<template>
    <div>
        <!-- 未登录状态 -->
        <div class="banner-bg">
             <!-- <img src="../assets/promotion_bg.jpg" alt="cover"> -->
             <i class="img">
                 <span> 打开App，浏览更多</span>
                 <span class="btn btn1">极速下载</span>
                 <span class="btn">打开</span>
             </i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['']
}
</script>
<style scoped  lang="scss">
    $base-color :#2CA532;
    i{
        font-style: normal;
    }
    .banner-bg{
        width: 100%;
        height: 7rem;
        font-size: 1.4rem;
    }
    img{
        width: 100%;
    }
    .img{
        background: url('../assets/promotion_bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        width: 100%;
        height: 7rem;
        padding: 3rem 0 0 4rem;
        color: $base-color;
    }
    .btn{
        display: inline-block;
        padding: 0 1.4rem;
        border: 0.1rem solid #2CA532;
        border-radius: 0.3rem;
        font-weight: 800;
    }
    .btn1{
        color: #fff;
        background: #2CA532;
        margin-left: 2rem;
    }

</style>

