import { BaseComponent } from "../base.component.js";

class BoardCardsListComponent extends BaseComponent {
  constructor() {
    super('ol[data-testid="lists"]');
  }

  get cardsList() {
    return this.rootElement.$$('div[data-testid="list-header"]');
  }

  get addListBtn() {
    return this.rootElement.$('button[data-testid="list-composer-button"]');
  }

  get addCardBtn() {
    return this.rootElement.$('button[data-testid="list-add-card-button"]');
  }

  get listNameTextBox() {
    return this.rootElement.$('textarea[placeholder="Enter list name…"]');
  }

  get cardNameTextArea() {
    return this.rootElement.$(
      'textarea[data-testid="list-card-composer-textarea"]',
    );
  }

  get saveListBtn() {
    return this.rootElement.$("button=Add list");
  }

  get saveCardBtn() {
    return this.rootElement.$(
      'button[data-testid="list-card-composer-add-card-button"]',
    );
  }

  get cardsCount() {
    return this.rootElement.$$('li[data-testid="list-card"]').length;
  }
}

export { BoardCardsListComponent };
