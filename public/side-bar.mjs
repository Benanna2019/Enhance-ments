export class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector("form");
    this.form.addEventListener("submit", this.toggleMenu.bind(this));
  }

  async toggleMenu(e) {
    e.preventDefault();

    await fetch("/menu", {
      //prettier-ignore
      headers: { "accept": "application/json" },
      method: "post",
    });

    window.location.reload();
  }
}

customElements.define("side-bar", Sidebar);
