import { BaseComponent } from "../base.component.js";

class ProfileHeaderComponent extends BaseComponent {
  constructor() {
    super('div[data-testid="header-container"]');
  }

  get searchBox() {
    return this.rootElement.$('input[placeholder="Search"]');
  }

  get expandedSearchBox() {
    return this.rootElement.$('input[data-test-id="search-dialog-input"]');
  }

  //Como puedo refrasear esta parte del codigo?
  get searchResult() {
    return this.rootElement
      .$('div[data-test-id="search-dialog-dialog-wrapper"]')
      .$('span="MyNewBoard"');
  }

  get workspacesBtn() {
    return this.rootElement.$('button[data-testid="workspace-switcher"]');
  }

  get plusBtn() {
    return this.rootElement.$(
      'button[data-testid="header-create-menu-button"]',
    );
  }

  get profileBtn() {
    return this.rootElement.$(
      'button[data-testid="header-member-menu-button"]',
    );
  }
}

export { ProfileHeaderComponent };
