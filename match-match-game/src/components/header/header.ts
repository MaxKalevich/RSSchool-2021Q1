import { BaseComponent } from '../base-component';
import './header.scss';
import { Button } from './button/button';
import { Logo } from './logo/logo';

export class Header extends BaseComponent {
  private readonly logo: Logo;

  private readonly button: Button;

  constructor() {
    super('div', ['header']);

    this.logo = new Logo();
    this.element.appendChild(this.logo.element);

    this.button = new Button();
    this.element.appendChild(this.button.element);
  }
}
