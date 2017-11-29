<template>
	<ul class="food-box">
		<li data-toggle="modal" :data-target="'#Modal' + index" v-for="(value, index) in dishes">
			<figure class="food-photo img-thumbnail">
				<img class="img-fluid" :src="dishes[index].img" :alt="dishes[index].name">
				<h6>{{ dishes[index].name }}</h6>
				<p>{{ dishes[index].type }}</p>
				<p class="food-price">{{ dishes[index].price }}</p>
			</figure>		
		</li>
	</ul>
</template>

<script>
	export default {
		data: function() {
			return {				
				dishes:[
					{
						img:'./src/assets/img/1.jpg',
						name:'Korean bibimbap with egg and vegetables',
						type:'Second courses',
						price:'$15.00'
					},
					{
						img:'./src/assets/img/2.jpg',
						name:'Simple italian pizza with cherry tomatoes',
						type:'Second courses',
						price:'$13.00'
					},
					{
						img:'./src/assets/img/3.jpg',
						name:'Chicken breast steak with vegetables',
						type:'Second courses',
						price:'$16.00'
					},
					{
						img:'./src/assets/img/4.jpg',
						name:'Autumn pumpkin soup',
						type:'Entrees',
						price:'$10.00'
					}
				]
			}
		}
		
	}
</script>
