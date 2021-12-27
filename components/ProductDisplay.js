app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!-- image goes here -->
                    <img :src="image">
                </div>

                <div>
                    <h1>{{ product }}</h1>
                    <h1>{{ title }}</h1>

                    <p v-if="inStock">In Stock </p>
                    <p v-else>Out of stock</p>

                    <p>Shipping: {{shipping}}</p>

                    <ul>
                        <li v-for="detail in details">
                            {{detail}}
                        </li>
                    </ul>
                    <!-- update image by computed property -->
                 <!--  @mouseover="updateVariant(index)" -->
                     
                    <div v-for="variant in variants" :key="variant.id"  @mouseover="updateImage(variant.image)"
                        class="color-circle" :style="{ backgroundColor: variant.color }">
                    </div>

                <button class="button" :class="{disabledButton: !inStock}" disabled="!inStock"
                    v-on:click="addToCart">Add to Cart</button>
                <!-- <button class="button" v-on:click="cart+=1">Add to Cart</button> -->
                </div>
            </div>
            <review-list  v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>

        </div>`,
    data() {
        return {
            brand: 'Vue Mastery',
            product: "Socks",
            image: './assets/images/green-socks.png',
            selectedVariant: 0,
            inStock: true,
            inventory: 8,
            details: ['50% cotton', '30% wood', '20% polyester'],
            variants: [
                { id: "221", color: 'blue', image: './assets/images/socks_blue.jpeg', quantity: 0 },
                { id: "222", color: 'green', image: './assets/images/socks_green.jpeg', quantity: 50 }
            ],
            activeClass: true,
            isActive: true,
            reviews: []
        }
    },
    methods: {
        addToCart() {
            console.log("addToCartcalled")
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        // addToCart() {
        //     console.log("addToCart called")
        //     this.cart += 1
        // },
        updateImage(variantImage) {
            this.image = variantImage;
        },
        updateVariant(index) {
            this.selectedVariant = index
            console.log("updateVariantcalled", index)
        },
        addReview(review) {
            this.reviews.push(review);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        // update image by computed property
        // image() {
        //     return this.variants[this.selectedVariant].image
        // },
        // inStock() {
        //     return this.variants[this.selectedVariant].quantity
        // },
        shipping() {
            if (this.premium) {
                return 'free'
            }
            return 2.99
        }
    }
})