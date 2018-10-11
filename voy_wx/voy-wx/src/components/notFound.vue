<template>
	<div id="notFound">
		{{name}}
	</div>
</template>

<script>
	export default{
		name:'notFound',
		data(){
			return{
				name:'没有找到该页面'
			}
		},
		mounted(){
			let box = document.getElementById('notFound');
			box.style.lineHeight = `${box.offsetHeight}px`;
		}
	}
</script>

<style>
	#notFound{
		width: 100%;
		height: 100%;
		line-height: 100%;
		font-size: 3rem;
		font-weight: bold;
		text-align: center;
	}
</style>\n