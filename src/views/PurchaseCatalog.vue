<template>
    <div id="app" class="d-flex flex-row">
        <div class="container">
            <div class="row m-0 relative">
                <span class="total-bouncer bg-success py-2 px-4">
                    TOTAL: S/. {{ total }}
                </span>
                <div class="col-12 px-0">
                    <div v-for="category in categories" :key="category.id" class="border-green my-3 container">
                        <div class="d-flex align-items-center py-3">
                            <img class="tent-logo" :src="category.name | url" :alt="category.name" />
                            <h2 class="py-3 ps-4 mb-0">{{ category.name }}</h2>
                        </div>
                        <div class="row">
                            <div v-for="product in products.filter(x => x.categoryID === category.id)" :key="product.id" class="col-3 px-1 mb-0">
                                <ProductsCard :product="product" @buy="addItem($event)" :shoppingList="shoppingList"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import ProductsCard from "../components/ProductsCard.vue";
    import { mapGetters } from "vuex";
    
    export default {
        name: "ShoppingCart",
        components: {
            ProductsCard,
        },
        data() {
            return {
            };
        },
        computed: {
            ...mapGetters('category', [ 'getCategoryList' ]),            
            ...mapGetters('product', [ 'getProductList' ]),
            total() {
                let res = 0;
                this.shoppingList.forEach((item) => {
                    res += item.product.price * item.count;
                });
                return res;
            },
            categories(){
                return this.$store.getters['category/getCategoryList'];
            },                        
            products(){
                return this.$store.getters['product/getProductList'];
            },
            shoppingList(){
                return this.$store.getters['shoppingList/get'];
            }            
        },
        methods: {
            addItem(item) {

            },
        },
        mounted() {
            this.$store.dispatch('category/get');
            this.$store.dispatch('product/get');
            this.$store.dispatch['shoppingList/get']            
        },
    };
</script>

<style scoped>
    .border-green {
        border-top: 2px solid #9fff31;
    }
    .total-bouncer {
        border-radius: 48px;
        z-index: 99;
        color: #fff;
        font-weight: bold;
        font-size: 32px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: fit-content;
    }
    .tent-logo {
        width: 100px;
        border-radius: 12px;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 60px;
    }
</style>