import { BaseComponent } from "../base.component.js";

class BoardHeaderComponent extends BaseComponent {
  constructor() {
    super('div[class="board-header u-clearfix js-board-header"]');
  }

  get filtersBtn() {
    return this.rootElement.$('button[data-testid="filter-popover-button"]');
  }

  get filtersXBtn() {
    return this.rootElement.$('button[data-testid="filter-popover-button-x"]');
  }
}

export { BoardHeaderComponent };
