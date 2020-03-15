export class App {
  constructor(config) {
    this.components = config.components;
    this.routes = config.routes;
  }

  start() {
    this.initComponents();
    this.initRoutes();
    window.addEventListener("hashchange", () => {
      this.initRoutes();
    });
  }

  initComponents() {
    this.components.forEach(component => this.renderComponents(component));
  }

  initRoutes() {
    let path = window.location.hash.slice(1).split("/");
    this.routes.forEach(rout => {
      if (rout.path === path[0]) {
        document.querySelector("router").innerHTML = `<${
          rout.component.selector
        }><${rout.component.selector}/>`;

        this.renderComponents(rout.component);
      }
    });
  }

  renderComponents(component) {
    component.beforeRender();
    component.render();
  }
}
