<template>
	<div class="dropdown">
		<button class="btn btn-light dropdown-toggle btn-assigment" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Vegetarian
		  </button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a class="dropdown-item"
			v-for="value in vegetarianOptions"
			@click="vegetarianFunction(value)">{{ value }}</a>
		</div>
	</div>	
</template>

<script>
	export default {
		props: {
			userVegetarian: {
				default: 'All products',
				type: String
			}
		},
		data() {
			return {
				vegetarianOptions:['All products', 'Vegetarian products', 'Non-Vegeterian products']
			}
		},
		methods: {
			vegetarianFunction(value) {
				this.userVegetarian = value;
				this.$emit('vegetarianChanged', this.userVegetarian);
			}
		}
	}
</script>