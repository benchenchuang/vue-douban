<template>
  <div class="todos">
    <div><h1>{{title}}</h1>
      <ul class='moving_list'>
        <li v-for='item in movieList'>
        <!--//                                +"<router-link :to='item.id'>"-->
          <router-link :to="{ name:'todo', params: {id: item.id}}">
              <img :src='item.images.large'/>
              <div class='movie_desc'>
                <span>类型：{{item.genres[0]}}</span>
                <p>导演：{{item.directors[0].name}}</p>
                <p>评分：{{item.rating.average}}分</p>
              </div>
            </router-link>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  var movieApi = 'https://api.douban.com/v2/movie/in_theaters';
  export default {
    name: 'todos',
    data:function(){
      return{
        title:'',
        movieList:''
      }
    },
    created:function(){
      document.title='';
      this.fetchData();
    },
    methods:{
      fetchData:function(){
        self=this;
        this.$http.jsonp(movieApi).then(function(response){
          const res=response.data;
          self.title=res.title;
          self.movieList=res.subjects;
          document.title=self.title;
          console.log(res)
        });
      }
    }
  }
</script>
