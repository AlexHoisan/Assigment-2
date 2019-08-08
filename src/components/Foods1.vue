<template>
	<ul class="food-box">
		<li data-toggle="modal"	:data-target="'#Modal' + index"
								v-if="(userCategory == listDishes[index].type || userCategory == 'All products')
								&& (userVegetarian == 'All products' || userVegetarian == listDishes[index].vegetarian)
								&& priceBar >= listDishes[index].price"
								v-for="(value, index) in listDishes">
			<figure class="food-photo img-thumbnail">
				<img class="img-fluid" :src="listDishes[index].img" :alt="listDishes[index].name">
				<h6>{{ listDishes[index].name }}</h6>
				<p>{{ listDishes[index].type }}</p>
				<p class="food-price">$ {{ listDishes[index].price }}</p>
			</figure>		
		</li>
		<infinite-loading v-show="switchLoad" @infinite="infiniteHandler"></infinite-loading>
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
		watch: {
			userSorting: function (val) {
				this.compareDishes();
			}
		},
		methods: {
			compareDishes() {
				if (this.userSorting === 'Price') {
					const sortingDishes = this.listDishes;
					this.copyDishes = this.listDishes.slice();
					function compare(a, b) {
					  const priceA = a.price;
					  const priceB = b.price;

					  let comparison = 0;
					  if (priceA > priceB) {
						comparison = 1;
					  } else if (priceA < priceB) {
						comparison = -1;
					  }
					  return comparison;
					}					
					console.log(sortingDishes.sort(compare));
				} else if (this.userSorting === 'Random') {
					this.listDishes = this.copyDishes.slice();
				}			
			},
			infiniteHandler($state) {
				setTimeout(() => {
					const temp = [];
					for (let i = this.listDishes.length; i <= this.listDishes.length + 3; i++) {
						if (i < this.dishes.length) {
							temp.push(this.dishes[i]);
						} else {
							this.switchLoad = false;
						}
					}
					this.listDishes = this.listDishes.concat(temp);
					$state.loaded();
				}, 1000);
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
				],
				copyDishes: [],
				listDishes: [],
				switchLoad: true
			}
		}
	}
</script>