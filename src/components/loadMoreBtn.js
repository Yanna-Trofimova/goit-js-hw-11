export default class BtnLoadMore{
    constructor(selector, isHidden = true) {
        this.button = this.getButton(selector);
        // this.isHidden = isHidden;

        if (isHidden) this.hide();
    }
    getButton(selector) {
        return document.querySelector(selector);
    }

    enable() {
        this.button.disabled = false;
        this.button.textContent = "Load More";
    }

    disable() {
        this.button.disabled = true;
        this.button.textContent = "Load";
    }

    hide() {
      this.button.classList.add("hidden");
    }
  
    show() {
      this.button.classList.remove("hidden");
    }
}