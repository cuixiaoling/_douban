<template>
    <div class='movie-view'>
        <scroller title="影院热映" type="hasCover"/>
        <scroller title="免费在线观影" type="hasCover"/>
        <scroller title="新片速递" type="hasCover"/>
        <scroller title="发现好电影" type="onlyString"/>
        <types />
        <download-app />
    </div>
</template>
<script>
import Scroller from '@/components/Scroller'
import Types from '@/components/Types'
import DownloadApp from '@/components/DownloadApp'
export default {
    data(){
        return{

        }
    },
    components:{
        Scroller,Types,DownloadApp
    }
    
}
</script>
<style scoped>
.movie-view{
    margin-top: 4.8rem;
    padding:0 1.6rem;
}
</style>


