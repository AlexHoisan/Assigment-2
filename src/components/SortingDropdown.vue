<template>
	<div class="dropdown">
		<button class="btn btn-light dropdown-toggle btn-assigment" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Sort By
		</button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a  class="dropdown-item"
				v-for="value in sortBy"
				@click="sortingFunction(value)">{{ value }}</a>
		</div>
	</div>	
</template>

<script>
	export default {
		props: {
			userSorting: {
				default: 'Random',
				type: String
			}
		},
		data() {
			return {
				sortBy:['Price', 'Random']
			}
		},
		methods: {
			sortingFunction(value) {
				this.userSorting = value;
				this.$emit('sortingChanged', this.userSorting);
			}
		}
	}
</script>