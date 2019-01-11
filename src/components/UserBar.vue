<template>
    <div class="content">
        <div class="left">
            <img src="../assets/user_normal.jpg" alt="未登陆">
            <div class="login_txt">请先登录</div>
        </div>
        <div class="right">
            <div class="icon icon-pen"></div>
            <div class="icon icon-camera"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .content{
        margin-top: 1rem;
        padding: 1rem 1.8rem;
        display:flex;
        justify-content: space-between;
        border-bottom:0.1rem solid #E8E8E8;
    .left , .right{
        display:flex;
        align-items: center;
    }
    img{
        border-radius:50%;
    }
    .login_txt{
        vertical-align: middle;
        margin-left: 1rem;
        font-size: 1.5rem;
        color: #aaa;
    }
    .icon {
        content: '';
        width: 4rem;
        height: 4rem;
        padding: 0.8rem;
        margin-left: 0.8rem;
        float: right;
        box-sizing: border-box;
    }

    .icon::before {
        content: '';
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        background-position: center;
        background-repeat: no-repeat;
    }

    .icon-camera::before {
        background-image: url(../assets/camera.svg);
    }

    .icon-pen::before {
        background-image: url(../assets/pen.svg);
    }

    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.1rem;
        background: #E8E8E8;
    }
  
  }
</style>

