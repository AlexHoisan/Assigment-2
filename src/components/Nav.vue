<template>
	<nav>
		<div class="container-fluid">
			<img class="logo" src="/src/assets/img/Food-Show-Logo-1.png" alt="Food Club logo" @click="nuMerge">
			<ul class="main-nav js--main-nav" :class="{showNav: isActive}">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Service</a></li>
				<li><a href="#">Blog</a></li>
				<li><a href="#">Contacts</a></li>
			</ul>
		</div>		
	</nav>	
</template>

<script>
	
	export default {
		props: ['isActive'],
		methods: {
			nuMerge: function() {
				console.log(this.isActive);
			}
		}
	}
</script>