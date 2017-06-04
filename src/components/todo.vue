<template>
  <div class="to">
    <div class='movie'>
      <h2>{{desc.alt_title}}</h2>
      <div class='movie_content'><img :src='desc.image'/>
        <div class='author'>
          <p>导演：<span v-for="demo1 in desc.author">{{demo1.name}} </span></p>
          <p>编剧：<span>{{writers}} </span></p>
          <p>评分：<span>{{desc.rating['average']}} </span></p>
          <p>地区：<span v-for="demo3 in desc.tags">{{demo3.name}} </span></p>
          <p>语言：<span v-for="demo4 in desc.attrs.language">{{demo4}} </span></p>
          <p>类型：<span v-for="demo5 in desc.tags">{{demo5.name}}</span></p>
          </div>
        </div><p class='desc_content'>{{desc.summary}}</p>
      </div>
  </div>
</template>
<script>
  var movieUrl='https://api.douban.com/v2/movie/';
  export default {
    name:'todo',
    data:function(){
      return {
        desc:[],
        movieId:'',
        authors:'',
        writers:''
      }
    },
    created:function(){
      this.getList();
    },
    methods:{
      getList:function(){
        var self=this;
        self.movieId=self.$route.params.id;
        console.log(self.movieId);
        this.$http.jsonp(movieUrl+self.movieId).then(function(response){
          const res=response.data;
          self.desc=res;
          self.authors=res.attrs.cast;
          self.writers=res.attrs.writer[0];
          document.title=self.desc.alt_title;
          console.log(self.desc)
        });
      }
    }
  }
</script>
