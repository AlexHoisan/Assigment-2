<template>
	<ul class="food-box">
		<li data-toggle="modal" :data-target="'#Modal' + index + 1" v-for="(value, index) in dishes">
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
						img:'./src/assets/img/5.jpg',
						name:'Paleo beef steak with vegetables',
						type:'Second courses',
						price:'$35.00'
					},
					{
						img:'./src/assets/img/6.jpg',
						name:'Healthy baguette with egg and vegetables',
						type:'Entrees',
						price:'$9.00'
					},
					{
						img:'./src/assets/img/7.jpg',
						name:'Burger with cheddar and bacon',
						type:'Second courses',
						price:'$13.00'
					},
					{
						img:'./src/assets/img/8.jpg',
						name:'Granola with cherries and strawberries',
						type:'Salads',
						price:'$8.00'
					}
				]
			}
		}
		
	}
</script>
