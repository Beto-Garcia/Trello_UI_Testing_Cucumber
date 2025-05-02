import { BaseComponent } from "../base.component.js";

class WorkspacesOptionsComponent extends BaseComponent {
  constructor() {
    super('div[data-testid="workspace-list"]');
  }

  get workspaceTitle() {
    return this.rootElement.$(
      'a[data-testid="workspace-switcher-popover-tile"]',
    );
  }
}

export { WorkspacesOptionsComponent };
