<template>
	   <div id="rangeBar">
		 <p> Price : <span>{{ priceBar }}</span> $ <span>
		   <input type="range"
		   min="8" max="40"
		   v-model="priceBar"
		   class="slider" id="myRange"
		   @click="priceBarFunction"
		   ></span></p>
	   </div>
</template>


<script>
	export default { 
		props: {
			priceBar: {
				default: 40
			}
		},
		methods: {
			priceBarFunction() {
				this.$emit('priceBarChanged', this.priceBar);
				console.log(this.priceBar);
			}
		}
	}
</script>


