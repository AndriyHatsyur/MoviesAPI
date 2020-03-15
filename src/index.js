import { appComponent } from "./app-component";
import { App } from "./app";
import { routes } from "./routes";

const app = new App({
  components: [appComponent],
  routes: routes
});

app.start();
