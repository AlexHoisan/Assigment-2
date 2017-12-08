<template>
  <div>
    <header>
      <app-nav @activeChanged="isActive = $event" :isActive="isActive"></app-nav>
      <a href="#" class="mobile-nav-icon js--nav-icon" @click="mobileNav">
        <i v-if=!isActive class="ion-navicon-round"></i>
        <i v-if=isActive class="ion-close-round"></i>
      </a>
      <app-hero-text></app-hero-text>
    </header>

    <app-dashboard @cartChanged="cart = $event"
                   :cart="cart">
    </app-dashboard>

    <section class="dropdowns">
      <div class="container-fluid">
        <div class="row" style="position: relative">
          <app-category-dropdown :userCategory="category"
                                  @categoryChanged="category = $event"
                                  ></app-category-dropdown>
                                  <app-sorting-dropdown
                                  :userSorting="sorting"
                                  @sortingChanged="sorting = $event"
                                  ></app-sorting-dropdown>
                                  <app-vegetarian-dropdown
                                  :userVegetarian="vegetarian"
                                  @vegetarianChanged="vegetarian = $event"
                                  ></app-vegetarian-dropdown>
                                  <app-price-bar
                                  :priceBar="priceBar"
                                  @priceBarChanged="priceBar = $event">
        </app-price-bar>
        </div>
      </div>
    </section>

    <section class="food">
      <div class="row">
        <app-foods :userCategory="category"
                    @categoryChanged="category = $event"
                    :userSorting="sorting"
                    @sortingChanged="sorting = $event"
                    :userVegetarian="vegetarian"
                    @vegetarianChanged="vegetarian = $event"
                    :priceBar="priceBar"
                    @priceBarChanged="priceBar = $event"></app-foods>
                    <app-food-modal
                    @cartChanged="cart = $event"
                    :cart="cart">
        </app-food-modal>
      </div>
    </section>

    <app-footer></app-footer>

  </div>
</template>

<script>
  export default {
    props: {
      isActive: {
        default: false,
        type: Boolean
      }
    },
    data() {
      return {
        category: 'All products',
        sorting: 'Random',
        vegetarian: 'All products',
        priceBar: 40,
        cart: []
      }
    },
    methods: {
      plm: function() {
        console.log(this.isActive);
      },
      mobileNav: function() {
        this.isActive = !this.isActive;
        this.$emit('activeChanged', this.isActive);
      }
    }
  }
</script>
