import { BaseComponent } from "../base.component.js";

class HomePageHeaderComponent extends BaseComponent {
  constructor() {
    super('[data-testid="bignav"]');
  }

  get logInBtn() {
    return this.rootElement.$("a=Iniciar sesión");
  }
}

export { HomePageHeaderComponent };
