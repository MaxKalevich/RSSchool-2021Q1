import Page from '../../core/templates/page';
import Card from '../../components/card';

const namePicturesEn: Array<string> = ['xxx', 'boxxot', 'coat', 'dress', 'pants', 'shirt', 'shoe', 'skirt'];
const namePicturesRus: Array<string> = ['блузка', 'ботинок', 'пальто', 'платье', 'брюки', 'рубашка', 'туфли', 'юбка'];

class Adjective extends Page {
  private card: Card;
  constructor(id: string) {
    super(id);
    this.card = new Card();
  }

  render() {
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRus[i], namePicturesEn[i], 'adjective'));
    }
    return this.container;
  }
}

export default Adjective;
