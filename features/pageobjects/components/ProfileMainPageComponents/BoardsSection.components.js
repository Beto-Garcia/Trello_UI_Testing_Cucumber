import { BaseComponent } from "../base.component.js";

class BoardsSectionComponent extends BaseComponent {
  constructor() {
    super('ul[class="boards-page-board-section-list"]');
  }

  boardListItem(param) {
    const selector = {
      mytrelloboard: "li=My Trello board",
      newboard: "li=newBoard01",
    };
    return this.rootElement.$(selector[param.toLowerCase()]);
  }
}

export { BoardsSectionComponent };
