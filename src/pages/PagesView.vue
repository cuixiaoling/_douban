<template>
    <div class="page_view">
    	<router-view></router-view>
    	<div class="content">
    	  <router-link :to="{path:'/'}" class="left tab1"><span>豆瓣</span></router-link>
    	  <div class="right">
    	    <router-link :to="{name:'MovieView'}" class="tab2">电影</router-link>
    	    <router-link :to="{name:'BookView'}" class="tab3">图书</router-link>
    	    <router-link :to="{name:'StatusView'}" class="tab4">广播</router-link>
    	    <router-link :to="{name:'GroupView'}" class="tab5">小组</router-link>
    	    <span class="tab6">    
    	      <svg class="icon" aria-hidden="true">
    	        <use xlink:href="#icon-sousuo"></use>
    	      </svg>
    	    </span>
    	  </div>
    	</div>


    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.content{
  font-size: 1.6rem;
  position: fixed;
  left: 0;
  right:0;
  top: 0;
  padding: 0 1.8rem;
  height: 4.8rem;
  line-height: 4.7rem;
  background: #fff;
}
.left{
  float: left;
}
.right{
  float: right;
}
.tab1{
  color: #00b600;
  font-weight: bold;
  font-size: 3.2rem;
}
.tab2{
  color: rgb(35, 132, 232);
  margin-right: 1.2rem;
}
.tab3{
  color: rgb(159, 120, 96);
  margin-right: 1.2rem;
}
.tab4{
  color: rgb(228, 168, 19);
  margin-right: 1.2rem;
}
.tab5{
  color: rgb(42, 184, 204);
  margin-right: 1.2rem;
}
.tab6{
  font-size: 2rem;
  color: #00b600;
}
</style>

