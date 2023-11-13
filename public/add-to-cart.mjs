export class AddToCart extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector("form");
    this.form.addEventListener("submit", this.addOne.bind(this));
    this.cartCount = document.getElementById("cart-count");
  }

  async addOne(e) {
    e.preventDefault();

    const res = await fetch("/", {
      //prettier-ignore
      headers: { "accept": "application/json" },
      method: "post",
    });

    const json = await res.json();

    this.cartCount.innerText = json.count;
  }
}

customElements.define("add-to-cart", AddToCart);
