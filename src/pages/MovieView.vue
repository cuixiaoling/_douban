<template>
    <div class='movie-view'>
        <scroller title="影院热映" :items='hotMovies' type="hasCover" />
        <scroller title="免费在线观影" :items='topMovies' type="hasCover"/>
        <scroller title="新片速递" :items='newMovies' type="hasCover"/>
        <scroller title="发现好电影" :items='movieTags' type="onlyString"/>
        <types />
        <download-app />
    </div>
</template>
<script>
import Scroller from '@/components/Scroller'
import Types from '@/components/Types'
import DownloadApp from '@/components/DownloadApp'
import { mapState } from 'vuex'
export default {
    data(){
        return{

        }
    },
    components:{
        Scroller,Types,DownloadApp
    },
    computed: {
    // Getting Vuex State from store/modules/movie
    ...mapState({
        hotMovies: state => state.movie.hotMovies,
        topMovies: state => state.movie.topMovies,
        newMovies: state => state.movie.newMovies,
        movieTags: state => state.movie.movieTags
        })
    },
    methods: {
        // Dispatching getMovie
        getMovie: function () {
            this.$store.dispatch('getMovie')
        }
    },
    created () {
        // Getting movies data on created
        this.getMovie();
        console.log(this.hotMovies,'0000')
    }
    
}
</script>
<style scoped>
.movie-view{
    margin-top: 4.8rem;
    padding:0 1.6rem;
}
</style>


