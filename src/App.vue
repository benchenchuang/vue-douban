<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

  <style>
  *{
    margin: 0;
    padding: 0;
  }
  #demo {
    font-family: 'Helvetica', Arial, sans-serif;
  }
  a {
    text-decoration: none;
    color: #999;
  }
  li {
    list-style: none;
    line-height: 1.5;
  }
  #demo h1,
  .movie h2{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    font-size: 16px;
    line-height: 2.5;
    color: #474747;
    text-align: center;
    background: #f5f5f5;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .moving_list{
    margin-top: 40px;
  }
  .moving_list li{
    padding: 20px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
  }
  .moving_list li img{
    float: left;
    width: 25%;
  }
  .moving_list li .movie_desc{
    margin-left: 30%;
  }
  .movie_desc h2{
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
    color: #474747;
    font-weight: 400;
  }
  .movie_content{
    margin-top: 60px;
    padding: 0 20px;
    font-size: 13px;
    font-weight: 400;
    overflow: hidden;
  }
  .movie_content img{
    float: left;
    width: 30%;
  }
  .author span{
    color: #999;
  }
  .author{
    margin-left: 35%;
    line-height: 1.7;
  }
  .author p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .desc_content{
    padding: 20px;
    font-size: 13px;
    color: #666;
  }
</style>
