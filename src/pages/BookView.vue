<template>
    <div class='movie-view'>
        <scroller title="最受关注图书 | 虚构类" :items='novel' type="hasCover" />
        <scroller title="最受关注图书 | 非虚构类" :items='reality' type="hasCover"/>
        <scroller title="豆瓣纸书" :items='travel' type="hasCover"/>
        <div class="promItem" slot="promItem">
            <img class="corver" src="../assets/book_zw.jpg" alt="">
            <div class="content">
            <span class="price">¥ 68</span>
            <p class="name">造物</p>
            <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
            </div>
        </div>
        <scroller title="发现好书" :items='bookTags' type="onlyString"/>
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
    // Getting Vuex State from store/modules/book
    ...mapState({
        novel: state => state.book.novel,
        reality: state => state.book.reality,
        travel: state => state.book.travel,
        bookTags: state => state.book.bookTags
        })
    },
    methods: {
        // Dispatching getMovie
        getMovie: function () {
            this.$store.dispatch('getMovie')
        },
        getBook:function(){
            this.$store.dispatch('getBook')
        }
    },
    created () {
        // Getting movies data on created
        this.getMovie();
        this.getBook();
        console.log(this.hotMovies,'0000')
    }
    
}
</script>
<style scoped>
.movie-view{
    margin-top: 4.8rem;
    padding:0 1.6rem;
}
.promItem {
  overflow: hidden;
  margin: 1.6rem 1.8rem 0.8rem 1.6rem;
}

.corver {
  float: left;
  width: 10rem;
  margin-right: 1.5rem;
}

.content {
  margin-right: 1rem;
}

.name {
  font-size: 2rem;
  color: #494949;
  margin: 1rem;
  max-width: 100%;
  line-height: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.price {
  float: right;
  color: #E76648;
  font-size: 1.6rem;
  line-height: 2.2rem;
}

.info {
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.5;
  color: #9B9B9B;
}
</style>


