/* eslint-disable no-undef */
class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }

  get rootElement() {
    return $(this.rootSelector);
  }
}

export { BaseComponent };
