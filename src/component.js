export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.data = null;
  }

  beforeRender() {}
  afterUpdate() {}

  setData(data) {
    this.data = data;
    this.render();
    this.afterUpdate();
  }

  render() {
    try {
      const element = document.querySelector(this.selector);
      element.innerHTML = this.template();
    } catch (e) {
      console.log(e.message);
    }
  }
}
