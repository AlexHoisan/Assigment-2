<template>
	<ul class="food-box" @click="myFun">
		<li data-toggle="modal"
		:data-target="'#Modal' + index"
		v-if="(userCategory == dishes[index].type || userCategory == 'All products')
		&& (userVegetarian == 'All products' || userVegetarian == dishes[index].vegetarian)
		&& priceBar >= dishes[index].price"
		v-for="(value, index) in dishes">
			<figure class="food-photo img-thumbnail">
				<img class="img-fluid" :src="dishes[index].img" :alt="dishes[index].name">
				<h6>{{ dishes[index].name }}</h6>
				<p>{{ dishes[index].type }}</p>
				<p class="food-price">$ {{ dishes[index].price }}</p>
			</figure>		
		</li>
	</ul>
</template>

<script>
	import Category from './CategoryDropdown.vue'
	import Sorting from './SortingDropdown.vue'
	import Vegetarian from './VegetarianDropdown.vue'
	import PriceBar from './PriceBar.vue'

	export default {
		props: {
			userCategory: {
				type: String
			},
			userSorting: {
				type: String
			},
			userVegetarian: {
				type: String
			},
			priceBar: {
				default: 40,
				type: Number
			},
		},
		methods: {
			myFun() {
				console.log(this.priceBar);
			}
		},
		data: function() {
			return {
				dishes: [{
						img: './src/assets/img/1.jpg',
						name: 'Korean bibimbap with egg and vegetables',
						text: "Koreans believe it heals the body, releases energy and keeps illness away through the winter. 'We say it's Everything in a spoon!'",
						type: 'Second courses',
						price: 15.00,
						vegetarian: 'Vegetarian products'
					},
					{
						img: './src/assets/img/2.jpg',
						name: 'Simple italian pizza with cherry tomatoes',
						text: 'A variety of fresh tomatoes and herbs top this homemade Tomato-Ricotta Pizza, adding colorful appeal as well fresh flavor.',
						type: 'Second courses',
						price: 13.00,
						vegetarian: 'Vegetarian products'
					},
					{
						img: './src/assets/img/3.jpg',
						name: 'Chicken breast steak with vegetables',
						text: "Marinated to burst with flavour, chicken pieces are sizzled on a pan till they're cooked just right.",
						type: 'Second courses',
						price: 16.00,
						vegetarian: 'Non-Vegeterian products'
					},
					{
						img: './src/assets/img/4.jpg',
						name: 'Autumn pumpkin soup',
						text: 'Description',
						type: 'Entrees',
						price: 10.00,
						vegetarian: 'Vegetarian products'
					},
					{
						img: './src/assets/img/5.jpg',
						name: 'Paleo beef steak with vegetables',
						text: 'Description',
						type: 'Second courses',
						price: 35.00,
						vegetarian: 'Non-Vegeterian products'
					},
					{
						img: './src/assets/img/6.jpg',
						name: 'Healthy baguette with egg and vegetables',
						text: 'Description',
						type: 'Entrees',
						price: 9.00,
						vegetarian: 'Vegetarian products'
					},
					{
						img: './src/assets/img/7.jpg',
						name: 'Burger with cheddar and bacon',
						text: 'Description',
						type: 'Second courses',
						price: 13.00,
						vegetarian: 'Non-Vegeterian products'
					},
					{
						img: './src/assets/img/8.jpg',
						name: 'Granola with cherries and strawberries',
						text: 'Description',
						type: 'Salads',
						price: 8.00,
						vegetarian: 'Vegetarian products'
					}
				]
			}
		}
	}
</script>