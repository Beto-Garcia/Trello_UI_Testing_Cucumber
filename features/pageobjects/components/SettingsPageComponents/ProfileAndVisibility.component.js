import { BaseComponent } from "../base.component.js";

class ProfileAndVisibility extends BaseComponent {
  constructor() {
    super('div[data-testid="profile-tab-container"]');
  }

  get usernameTextBox() {
    return this.rootElement.$("#username");
  }

  get saveBtn() {
    return this.rootElement.$("button=Save");
  }

  get savedAlert() {
    return this.rootElement.$("span=Saved");
  }

  get errorAlert() {
    return this.rootElement.$("#SaveProfileError_Field_username");
  }
}

export { ProfileAndVisibility };
