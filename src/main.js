import Vue from 'vue'
import App from './App.vue'
import Nav from './components/Nav.vue'
import HeroText from './components/HeroText.vue'
import Category from './components/CategoryDropdown.vue'
import Sorting from './components/SortingDropdown.vue'
import Vegetarian from './components/VegetarianDropdown.vue'
import Foods1 from './components/Foods1.vue'
import Foods2 from './components/Foods2.vue'
import FoodModals from './components/FoodModals.vue'
import Footer from './components/Footer.vue'

Vue.component('app-nav', Nav);
Vue.component('app-hero-text', HeroText);
Vue.component('app-category-dropdown', Category);
Vue.component('app-sorting-dropdown', Sorting);
Vue.component('app-vegetarian-dropdown', Vegetarian);
Vue.component('app-foods1', Foods1);
Vue.component('app-foods2', Foods2);
Vue.component('app-food-modal', FoodModals);
Vue.component('app-footer', Footer);


new Vue({
  el: '#app',
  render: h => h(App)
})
