<template>
	<div>
		<header>
			<app-nav></app-nav>
			<app-hero-text></app-hero-text>
		</header>

		<section class="dropdowns">
			<div class="container-fluid">
				<div class="row">
					<app-category-dropdown></app-category-dropdown>
					<app-sorting-dropdown></app-sorting-dropdown>
					<app-vegetarian-dropdown></app-vegetarian-dropdown>
				</div>
			</div>
		</section>
		
		<section class="food">
		<div class="container-fluid">
			<div class="row">				
				<app-foods1></app-foods1>
				<app-foods2></app-foods2>
				<app-food-modal></app-food-modal>
			</div>
		</div>
		</section>
		
		<app-footer></app-footer>
		
	</div>
</template>

<script>
	export default {}
</script>