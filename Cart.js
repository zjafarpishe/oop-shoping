
class Cart {
    constructor(parent, price) {
        this.parent = parent
        this.price = price
        this.product = []
        this.Toshow = []
        this.parent.addEventListener("click", this)

    }


    Card() {

        this.Toshow = new Set([...this.product])
        this.parent.innerHTML = ""
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
        this.calcTotalPrice()
    }


    showIMGCard(item) {
        const { image, alt } = item
        const img = `<img class="imageCart" src=${image} alt=${alt}/>`
        return img
    }

    showInfo(item) {
        const { name, price } = item
        const info = `
        <div class="infoCart">
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
                <button class="btn" data-id=${id}>-</button>
                <span>${qty}<span>
                <button class="btn" data-id=${id}>+</button>
            </div>
            <button class="remove btn" data-id=${id}>Remove</button>
        </div>
        `
        return control
    }

    handleEvent(event) {
        if (event.target.tagName != 'BUTTON') return
        const type = event.target.innerText
        const id = event.target.dataset.id
        console.log(type);

        switch (type) {
            case "-": {
                this.DecreaseProduct(id)
                break;
            }

            case "+":
                {
                    this.IncreaseProduct(id)
                    break;
                }
            case "Remove":
                {

                    this.Remove(id)
                    break;
                }
        }
    }

    IncreaseProduct(id) {
        const product = this.product.find(item => item.id === +id)
        this.product.push(product)
        this.Card()
    }

    DecreaseProduct(id) {
        const index = this.product.findIndex(item => item.id === +id)
        console.log(index);
        this.product.splice(index, 1)
        this.Card()
    }

    Remove(id) {
        const product = this.product.filter(item => item.id !== +id)
        this.product = product
        this.Card()
    }


    calcTotalPrice() {
        const price = this.product.reduce((acc, cur) => acc += cur.price, 0)
        this.price.innerText = price
    }

}


export default Cart