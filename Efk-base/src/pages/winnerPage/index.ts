import Page from '../../core/templates/page';

export enum WinnerTypes {
  WINNER = 'Winner!',
}

class WinnerPage extends Page {
  private winnerType: WinnerTypes | string;

  private readonly audio: HTMLAudioElement;

  private image: HTMLImageElement;

  constructor(id: string, Type: WinnerTypes | string) {
    super(id);
    this.winnerType = Type;
    this.image = document.createElement('img');
    this.image.src = '/Winner.jpg';
    this.image.style.width = '50%';
    this.image.style.margin = '10px auto';
    this.audio = document.createElement('audio');
    this.audio.className = 'audio';
  }

  playWinner() {
    this.audio.currentTime = 0;
    this.audio.play();
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(WinnerTypes.WINNER);
    title.style.width = '100%';
    title.style.textAlign = 'center';
    this.container.append(title);
    this.container.append(this.image);
    this.container.appendChild(this.audio);
    this.audio.src = '/audio/winner.mp3';
    this.playWinner();
    return this.container;
  }
}

export default WinnerPage;
