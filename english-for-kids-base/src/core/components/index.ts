import Component from '../templates/components';
import { PageIds } from '../../pages/app';
import ToggleButton from '../../components/toggleButton';
import Hamburger from '../../components/hamburger';

// const Buttons = [
//   {
//     id: PageIds.mainPage,
//     text: 'Main Page',
//   },
//   {
//     id: PageIds.actionSetA,
//     text: 'Action Set A',
//   },
//   {
//     id: PageIds.actionSetB,
//     text: 'Action Set B',
//   },
// ];

class Header extends Component {
  private buttonSwitch: ToggleButton;

  private hamburger: Hamburger;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.buttonSwitch = new ToggleButton();
    this.hamburger = new Hamburger();
  }

  renderPageElements() {
    // const burgerButton = document.createElement('div');
    // burgerButton.className = 'burger-button-container';
    // Buttons.forEach((button) => {
    //   const buttonTagHtml = document.createElement('a');
    //   buttonTagHtml.href = `#${button.id}`;
    //   buttonTagHtml.innerText = button.text;
    //   burgerButton.append(buttonTagHtml);
    // });
    // this.container.append(burgerButton);
  }

  render() {
   // this.renderPageElements();
    this.container.append(this.buttonSwitch.createButton());
    this.container.append(this.hamburger.createHamburger());

    return this.container;
  }
}

export default Header;
