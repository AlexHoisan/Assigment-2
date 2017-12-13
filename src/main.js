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

import Position from './components/CartComponents/Position.vue'
import ItemName from './components/CartComponents/ItemName.vue'
import ItemCount from './components/CartComponents/ItemCount.vue'
import ItemPrice from './components/CartComponents/ItemPrice.vue'
import ItemTotal from './components/CartComponents/ItemTotal.vue'
import ItemCart from './components/ItemCart.vue'
import InfiniteLoading from 'vue-infinite-loading';
import _ from 'lodash';


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
Vue.component('app-position', Position,);
Vue.component('app-item-name', ItemName,);
Vue.component('app-item-count', ItemCount);
Vue.component('app-item-price', ItemPrice);
Vue.component('app-item-total', ItemTotal);
Vue.component('app-item-cart', ItemCart);
Vue.component('InfiniteLoading', InfiniteLoading);



new Vue({
	el: '#app',
	render: h => h(App)
})
