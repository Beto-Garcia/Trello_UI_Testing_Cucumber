import { BaseComponent } from "../base.component.js";

class BoardSideMenuComponent extends BaseComponent {
  constructor() {
    super('div[data-testid="current-workspace-expanded"]');
  }

  get boardsBtn() {
    return this.rootElement.$('a[data-testid="open-boards-link"]');
  }
}

export { BoardSideMenuComponent };
