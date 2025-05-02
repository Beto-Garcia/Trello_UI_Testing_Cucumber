import { BaseComponent } from "../base.component.js";

class FiltersComponent extends BaseComponent {
  constructor() {
    super('section[class="rX4pAv5sWHFNjp js-react-root"]');
  }

  get filtersCloseBtn() {
    return this.rootElement.$('button[data-testid="popover-close"]');
  }

  get bugLabel() {
    return this.rootElement.$("li=Bug");
  }

  get pendingLabel() {
    return this.rootElement.$("li=Pending");
  }

  get storyLabel() {
    return this.rootElement.$("li=Story");
  }
}

export { FiltersComponent };
