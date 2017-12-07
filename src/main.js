import Vue from 'vue'
import App from './App.vue'
import Nav from './components/Nav.vue'
import HeroText from './components/HeroText.vue'
import Category from './components/CategoryDropdown.vue'
import Sorting from './components/SortingDropdown.vue'
import Vegetarian from './components/VegetarianDropdown.vue'
import PriceBar from './components/PriceBar.vue'
import Foods1 from './components/Foods1.vue'
import FoodModals from './components/FoodModals.vue'
import Footer from './components/Footer.vue'
import Dashboard from './components/Dashboard.vue'


Vue.component('app-nav', Nav);
Vue.component('app-hero-text', HeroText);
Vue.component('app-category-dropdown', Category);
Vue.component('app-sorting-dropdown', Sorting);
Vue.component('app-vegetarian-dropdown', Vegetarian);
Vue.component('app-price-bar', PriceBar);
Vue.component('app-foods', Foods1);
Vue.component('app-food-modal', FoodModals);
Vue.component('app-footer', Footer);
Vue.component('app-dashboard', Dashboard);



new Vue({
  el: '#app',
  render: h => h(App)
})
