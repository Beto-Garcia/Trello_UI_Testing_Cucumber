import { BaseComponent } from "../base.component.js";

class LogInFormComponent extends BaseComponent {
  constructor() {
    super("#form-login");
  }

  get userNameTextBox() {
    return this.rootElement.$("#username");
  }

  get continueBtn() {
    return this.rootElement.$("button=Continue");
  }

  get passTextBox() {
    return this.rootElement.$("#password");
  }

  get logInBtn() {
    return this.rootElement.$("button=Log in");
  }
}

export { LogInFormComponent };
