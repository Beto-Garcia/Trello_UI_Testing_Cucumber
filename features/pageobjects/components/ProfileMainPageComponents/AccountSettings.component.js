import { BaseComponent } from "../base.component.js";

class AccountSettingsComponent extends BaseComponent {
  constructor() {
    super('div[data-testid="account-menu"]');
  }

  get profileAndVisibilityBtn() {
    return this.rootElement.$('a[data-testid="account-menu-profile"]');
  }
}

export { AccountSettingsComponent };
