export class XMarkIcon extends HTMLElement {
  constructor() {
    super();
    this.svg = this.querySelector('[name="close-menu"]');
    this.svg.addEventListener("click", this.closeMenu.bind(this));
  }

  async closeMenu(e) {
    const res = await fetch("/menu", {
      //prettier-ignore
      headers: { "accept": "application/json" },
      method: "post",
    });
  }
}

customElements.define("xmark-icon", XMarkIcon);
