import { BaseComponent } from "../base.component.js";

class WorkspaceDetailsComponent extends BaseComponent {
  constructor() {
    super("#content-wrapper");
  }

  get editIcon() {
    return this.rootElement.$('span[data-testid="EditIcon"]');
  }

  get workspaceName() {
    return this.rootElement.$('h2[class="SiP6d2d_8FAAkC"]');
  }

  get projectNameTextBox() {
    return this.rootElement.$('input[data-testid="workspace-display-name"]');
  }

  get saveBtn() {
    return this.rootElement.$("button=Save");
  }
}

export { WorkspaceDetailsComponent };
