import axios from 'axios'
const state = {
    novel:[],
    reality:[],
    travel:[],
    bookTags: [
        {
            title: '不可饶恕的女人们',
            href: 'https://m.douban.com/doulist/35573',
            color: '#42BD56'
        },
        {
            title: '爱欲书',
            href: 'https://m.douban.com/doulist/38088147',
            color: '#FF4055'
        },
        {
            title: '他们还写侦探小说',
            href: 'https://m.douban.com/doulist/645579',
            color: '#4F9DED'
        },
        {
            line: true
        },
        {
            title: '人生识字始忧患',
            href: 'https://m.douban.com/doulist/192653',
            color: '#CC3344'
        },
        {
            title: '詩歌書店',
            href: 'https://m.douban.com/doulist/89925',
            color: '#FFAC2D'
        },
        {
            title: '尝试理解人类变化无常不可测心理相关小荐',
            href: 'https://m.douban.com/doulist/45361809',
            color: '#3BA94D'
        }
    ]
}
const mutations = {
    getBook2(state,payload){
        // paload 接收 commit 内容
        switch(payload.tag){
            case 'noval':
                state.novel = payload.res
                break;
            case 'reality':
                state.reality = payload.res
                break
            case 'travel':
                state.travel = payload.res
                break
            default:
                state.novel = payload.res

        }
    }
}
const actions={
    /**
     * action 调用  commit 
     * store.commit ('increment',{amount:10})
     * store.commit({
     *      type:'increament,
     *      aumount:'10'
     * })
     */
/**
 * getBook 
 * q:虚拟类，非虚拟类，旅行
 * count：8
 */
    getBook({commit}){
        axios.get('/api/v2/book/search?q=虚构类&count=8').then((res)=>{
            console.log(res,'999')
            commit({
                type:'getBook2',
                tag:'novel',
                res:res.data.books
            })
        })
        axios.get('/api/v2/book/search?q=非虚构类&count=8').then((res) => {
            console.log(res, '999')
            commit({
                type: 'getBook2',
                tag: 'reality',
                res: res.data.books
            })
        })
        axios.get('/api/v2/book/search?q=旅行&count=8').then((res) => {
            console.log(res, '999')
            commit({
                type: 'getBook2',
                tag: 'travel',
                res: res.data.books
            })
        })
    }
}
export default {
    state,
    mutations,
    actions

}