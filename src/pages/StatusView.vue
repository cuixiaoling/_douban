<template>
    <div class='state-view'>
        <banner></banner>
        <user-bar></user-bar>
        <div>
            <card v-for="item in 6" :key="item"></card>
            <a class="list-link" href="#">显示更多广播</a>
        </div>
        <download-app></download-app>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import UserBar from '@/components/UserBar'
import Card from '@/components/Card'
import DownloadApp from '../components/DownloadApp'
export default {
    data(){
        return{

        }
    },
    components:{
        Banner,UserBar,Card,DownloadApp
    },
    methods:{

    }
}
</script>
<style scoped>
    .state-view{
        margin-top: 4.8rem;
    }
    .list-link {
    display: block;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
    }
</style>


