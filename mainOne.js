const app = Vue.createApp({
    data() {
        return {
            brand: 'Vue Mastery',
            cart: 0,
            product: "Socks",
            image: './assets/images/green-socks.png',
            selectedVariant: 0,
            inStock: false,
            inventory: 8,
            details: ['50% cotton', '30% wood', '20% polyester'],
            variants: [
                { id: "221", color: 'blue', image: './assets/images/socks_blue.jpeg', quantity: 0 },
                { id: "222", color: 'green', image: './assets/images/socks_green.jpeg', quantity: 50 }
            ],
            activeClass: true,
            isActive: true
        }
    },
    methods: {
        addToCart() {
            console.log("addToCart called")
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },
        updateVariant(index) {
            this.selectedVariant = index
            console.log("updateVariantcalled", index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        // update image by computed property
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})