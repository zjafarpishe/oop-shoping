
class Cart {
    constructor(parent, price) {
        this.parent = parent
        this.price = price
        this.product = []
        this.Toshow = []
    }


    Card() {

        this.Toshow = new Set([...this.product])
        this.parent.innerHTML=""
        this.Toshow.forEach(item => {
            const qty = this.product.filter(data => item.id == data.id).length
            const cart = document.createElement("div")
            cart.classList.add('cart')

            const img = this.showIMGCard(item)
            const info = this.showInfo(item)
            const control = this.ShowContol(item, qty)

            cart.innerHTML = img
            cart.innerHTML += info
            cart.innerHTML += control
            this.parent.appendChild(cart)



        });

    }


    showIMGCard(item) {
        const { image, alt } = item
        const img = `<img src=${image} alt=${alt}/>`
        return img
    }

    showInfo(item) {
        const { name, price } = item
        const info = `
        <div class="info">
            <div>${name}</div>
            <div>${price}</div>
        </div>
        `
        return info
    }

    ShowContol(item, qty) {
        const { id } = item
        const control = `
        <div class="control">
            <div>
            <button class="btn" data-id=${id}>-<button>
            <span>${qty}<span>
            <button class="btn" data-id=${id}>+<button>
            </div>
            <div data-id=${id}>Remove</div>
        </div>
        `
        return control
    }
}


export default Cart