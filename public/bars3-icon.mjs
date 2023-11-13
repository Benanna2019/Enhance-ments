export class Bars3Icon extends HTMLElement {
  constructor() {
    super();
    this.svg = this.querySelector('[name="open-menu"]');
    this.svg.addEventListener("click", this.openMenu.bind(this));
  }

  async openMenu(e) {
    const res = await fetch("/menu", {
      //prettier-ignore
      headers: { "accept": "application/json" },
      method: "post",
    });
  }
}

customElements.define("bars3-icon", Bars3Icon);
