import Page from '../../core/templates/page';
import {WinnerTypes} from "../winnerPage";

class NoAuthorizedPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle('Access is limited, the page is intended only for an authorized user.');
    title.style.width = '100%';
    title.style.textAlign = 'center';
    this.container.append(title);
    return this.container;
  }
}

export default NoAuthorizedPage;
