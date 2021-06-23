import './winnersButton.scss';

export class WinnersButton {
  private readonly button: HTMLButtonElement;

  constructor(parent: HTMLElement) {
    this.button = document.createElement('button');
    this.button.className = 'winners-button';
    this.button.innerText = 'To Winners!';
    this.button.onclick = () => {
      // App.renderNewPage('winners-page');
      // @ts-ignore
      window.location = '#winners-page';
    };
    parent.append(this.button);
  }
}
