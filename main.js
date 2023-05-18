const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {
        updateCartMethod() {
            console.log("updateCartMethod called");
            this.cart += 1;
        }
    }
})