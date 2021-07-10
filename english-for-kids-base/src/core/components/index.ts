import Component from '../templates/components';
import ToggleButton from '../../components/toggleButton';
import Hamburger from '../../components/hamburger';
import './style_header.scss';
import App from '../../pages/app';
import ModalWindow from '../../components/modalWindow';

class Header extends Component {
  private buttonSwitch: ToggleButton;

  private readonly header: HTMLAnchorElement;

  private hamburger: Hamburger;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.header = document.createElement('a');
    this.header.style.width = '480px';
    this.buttonSwitch = new ToggleButton();
    this.hamburger = new Hamburger();
  }

  createHeaderTitle(text: string): HTMLElement {
    this.header.textContent = text;
    this.header.href = '#main-page';
    this.header.className = 'game-name';
    return this.header;
  }

  createImg(image: string): HTMLElement {
    const img = document.createElement('a');
    img.className = 'logo';
    img.style.backgroundImage = `url('./${image}')`;
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = '25% 55%';
    img.style.width = '140px';
    img.style.position = 'relative';
    img.style.top = '-25px';
    img.style.height = '140px';
    return img;
  }

  render() {
    this.container.append(this.hamburger.createHamburger());
    this.container.append(this.createImg('compot.png'));
    this.container.append(this.createHeaderTitle('ENGLISH KITTENS'));
    this.container.append(this.createImg('caramelka.png'));
    this.container.append(this.buttonSwitch.createButtonSwitch());
    return this.container;
  }
}

export default Header;
