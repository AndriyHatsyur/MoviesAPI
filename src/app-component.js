import { Component } from "./component";

class AppComponent extends Component {
  template() {
    return `
    <a href='#'>Home<a/>
    <br><br>
    <router></router>
    `;
  }
}

export const appComponent = new AppComponent({
  selector: "app"
});
