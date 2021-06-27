import Page from '../../core/templates/page';
import Card from '../../components/card';

const namePicturesEn: Array<string> = ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'];
const namePicturesRus: Array<string> = ['открывать', 'играть', 'указывать', 'ездить', 'бегать', 'петь', 'пропускать, прыгать', 'плавать'];

class ActionSetB extends Page {
  private card: Card;
  constructor(id: string) {
    super(id);
    this.card = new Card();
  }

  render() {
    // const title = this.createHeaderTitle('ActionSetB');
    // this.container.append(title);
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRus[i], namePicturesEn[i], 'categoryActionSetB'));
    }
    return this.container;
  }
}

export default ActionSetB;
