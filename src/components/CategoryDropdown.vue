<template>
	<div class="dropdown">
		<button class="btn btn-light dropdown-toggle btn-assigment" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Category
		  </button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a class="dropdown-item"
			v-for="value in categories"
			@click="categoryFunction(value)">{{ value }}</a>
		</div>
	</div>	
</template>

<script>
	export default {
		props: {
			userCategory: {
				default: 'All products',
				type: String
			}
		},
		data() {
			return {
				categories: ['All products', 'Entrees', 'Second courses', 'Salads']
			}
		},
		methods: {
			categoryFunction(value) {
				this.userCategory = value;
				this.$emit('categoryChanged', this.userCategory);
				console.log(this.userCategory);
			}
		}
	}
</script>