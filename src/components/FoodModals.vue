<template>
	<div class="food-box">
		<div class="modal fade bd-example-modal-lg" :id="'Modal' + index" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"  v-for="(value, index) in dishes">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">{{ dishes[index].name }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="container-fluid">
							<div class="row-modal">
								<ul>
									<li>
										<div class="col-sm-10">
											<img :src="dishes[index].img" :alt="dishes[index].name" class="img-fluid">
										</div>
									</li>
									<li>
										<div class="col-sm-12">
											<p class="p-modal">{{ dishes[index].text }}</p>
										</div>
										<ul>
											<li>
												<label for="order-quantity">Quantity?</label>
											</li>
											<li>
												<select name="order-quantity"
														id="order-quantity"
														v-model.number="selectedQuantity">
													<option v-for="qunatity in quantities"> {{ qunatity }}</option>
												</select>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" class="btn add-to-cart"
											  :data-name="dishes[index].name"
											  :data-price="dishes[index].price"
											  @click="addItemToCart(dishes[index].name, dishes[index].price, selectedQuantity)"
											  >Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		props: {
			cart: {
				default: [],
				type: Array
			}
		},
		data: function() {
			return {
				selectedQuantity: '1',
				quantities: ['1', '2', '3', '4', '5'],
				dishes: [{
						img: './src/assets/img/1.jpg',
						name: "Korean bibimbap with egg and vegetables",
						text: "Koreans believe it heals the body, releases energy and keeps illness away through the winter. 'We say it's Everything in a spoon!'",
						type: 'Second courses',
						price: 15.00,
						vegetarian: 'Yes'
					},
					{
						img: './src/assets/img/2.jpg',
						name: 'Simple italian pizza with cherry tomatoes',
						text: 'A variety of fresh tomatoes and herbs top this homemade Tomato-Ricotta Pizza, adding colorful appeal as well fresh flavor.',
						type: 'Second courses',
						price: 13.00,
						vegetarian: 'Yes'
					},
					{
						img: './src/assets/img/3.jpg',
						name: 'Chicken breast steak with vegetables',
						text: "Marinated to burst with flavour, chicken pieces are sizzled on a pan till they're cooked just right.",
						type: 'Second courses',
						price: 16.00,
						vegetarian: 'No'
					},
					{
						img: './src/assets/img/4.jpg',
						name: 'Autumn pumpkin soup',
						text: 'Description',
						type: 'Entrees',
						price: 10.00,
						vegetarian: 'Yes'
					},
					{
						img: './src/assets/img/5.jpg',
						name: 'Paleo beef steak with vegetables',
						text: 'Description',
						type: 'Second courses',
						price: 35.00,
						vegetarian: 'No'
					},
					{
						img: './src/assets/img/6.jpg',
						name: 'Healthy baguette with egg and vegetables',
						text: 'Description',
						type: 'Entrees',
						price: 9.00,
						vegetarian: 'Yes'
					},
					{
						img: './src/assets/img/7.jpg',
						name: 'Burger with cheddar and bacon',
						text: 'Description',
						type: 'Second courses',
						price: 13.00,
						vegetarian: 'No'
					},
					{
						img: './src/assets/img/8.jpg',
						name: 'Granola with cherries and strawberries',
						text: 'Description',
						type: 'Salads',
						price: 8.00,
						vegetarian: 'Yes'
					}
				]
			}
		},
		methods: {
			addItemToCart(name, price, count) {
				let item = {
					name : name,
					price : price,
					count : parseInt(count)
				};
				for (let i=0; i < this.cart.length; i++) {
					if (this.cart[i].name === name) {
						this.cart[i].count += parseInt(count);
						return;
					}
				}				
				this.cart.push(item);				
				this.$emit('cartChanged', this.cart);
			}
		}
	}
</script>


