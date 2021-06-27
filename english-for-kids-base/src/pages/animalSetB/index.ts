import Page from '../../core/templates/page';
import Card from '../../components/card';

const namePicturesEn: Array<string> = ['bird', 'dolphin', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle'];
const namePicturesRus: Array<string> = ['птица', 'дельфин', 'рыба', 'жаба', 'жираф', 'лев', 'мышь', 'черепаха'];

class AnimalSetB extends Page {
  private card: Card;
  constructor(id: string) {
    super(id);
    this.card = new Card();
  }

  render() {
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRus[i], namePicturesEn[i], 'animalSetB'));
    }
    return this.container;
  }
}

export default AnimalSetB;
