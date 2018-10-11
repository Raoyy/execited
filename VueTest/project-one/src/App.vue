<template>
  <div id="container">
  	<header-com></header-com>
    <router-view/>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerCom from './components/header'
import footerCom from './components/footer'
export default {
  name: 'container',
  data(){
  	return{
  		title:""
  	}
  },
  components:{
  	headerCom,
  	footerCom
  }
}
</script>

<style>
#container{
	width: 100%;
}
</style>
