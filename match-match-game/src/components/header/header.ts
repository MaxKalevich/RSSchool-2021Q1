import { BaseComponent } from '../base-component';
import './header.scss';
// eslint-disable-next-line import/no-cycle
import { Button } from './button/button';
import { Logo } from './logo/logo';
// eslint-disable-next-line import/no-cycle
import { PageIds } from '../../pages/application/application';

const Buttons = [
  {
    id: PageIds.ABOUT_PAGE,
    text: 'About Page',
    named: 'about',
  },
  {
    id: PageIds.SETTINGS_PAGE,
    text: 'Settings Page',
    named: 'settings',
  },
  {
    id: PageIds.STATISTICS_PAGE,
    text: 'Statistics Page',
    named: 'statistics',
  },
];

export class Header extends BaseComponent {
  private readonly logo: Logo;

  private readonly button: Button;

  constructor() {
    super('div', ['header']);

    this.logo = new Logo();
    this.element.appendChild(this.logo.element);

    this.button = new Button();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  renderPageButtons() {
    const pageButtons = document.createElement('div');
    pageButtons.className = 'pages';
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.className = `${button.named}`;
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.element.append(pageButtons);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    this.renderPageButtons();
    this.element.appendChild(this.button.element);
    return this.element;
  }
}
