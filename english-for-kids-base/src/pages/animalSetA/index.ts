import Page from '../../core/templates/page';
import Card from '../../components/card';

const namePicturesEn: Array<string> = ['cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep'];
const namePicturesRus: Array<string> = ['кот', 'цыплёнок', 'курица', 'собака', 'лошадь', 'свинья', 'кролик', 'овца'];

class AnimalSetA extends Page {
  private card: Card;
  constructor(id: string) {
    super(id);
    this.card = new Card();
  }

  render() {
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRus[i], namePicturesEn[i], 'animalSetA'));
    }
    return this.container;
  }
}

export default AnimalSetA;
