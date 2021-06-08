import Page from '../../core/templates/page';
import { Howtoplay } from '../../components/how-to-play/howtoplay';
import './about.scss';

export class About extends Page {
  private readonly howtoplay: Howtoplay;

  constructor(id: string) {
    super(id);
    this.howtoplay = new Howtoplay();
    this.container.appendChild(this.howtoplay.element);
    this.container.style.background = 'url(.//images/texture.jpg)';
    this.container.style.height = '700px';
    this.container.style.backgroundSize = 'cover';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return this.container;
  }
}
