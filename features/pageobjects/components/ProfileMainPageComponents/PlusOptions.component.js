import { BaseComponent } from "../base.component.js";

class PlusOptionsComponent extends BaseComponent {
  constructor() {
    super('section[data-testid="header-create-menu-popover"]');
  }

  get createBoardBtn() {
    return this.rootElement.$(
      'button[data-testid="header-create-board-button"]',
    );
  }

  get boardNameTextBox() {
    return this.rootElement.$('input[data-testid="create-board-title-input"]');
  }

  get submitBtn() {
    return this.rootElement.$(
      'button[data-testid="create-board-submit-button"]',
    );
  }
}

export { PlusOptionsComponent };
