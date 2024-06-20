

export default class ShowProduct {

    constructor(parent, products, cart) {
        this.parent = parent
        this.products = products
        this.cart = cart
        this.Card(products, parent)
        this.parent.addEventListener("click", this)

    }

    Card(products, parent) {
        products.map((item) => {
            const card = document.createElement("div")
            card.classList.add('card')
            const img = this.showIMGCard(item)
            const info = this.showInfo(item)
            card.innerHTML = img
            card.innerHTML += info

            parent.append(card)
        })
    }

    showIMGCard(item) {
        const { image, alt } = item
        const img = `<img src=${image} alt=${alt}/>`
        return img
    }

    showInfo(item) {
        const { id, name, price } = item
        const info = `
        <div class="info">
            <div>${name}</div>
            <div class="controll">
                <span>${price}</span>
                <button class="btn" data-id=${id}>+</button>
            </div>
        </div>
        `
        return info
    }

    handleEvent(e) {
        if (e.target.tagName == "BUTTON") {
            const id=e.target.dataset.id
            const findProduct=this.products.find(item=>item.id==id)
            this.cart.product.push(findProduct)
            this.cart.Card()
        }
    }
}