import Page from '../../core/templates/page';
import Card from '../../components/card';

const namePicturesEn: Array<string> = ['angry', 'happy', 'laugh', 'sad', 'scared', 'smile', 'surprised', 'tired'];
const namePicturesRus: Array<string> = ['сердитый', 'счастливый', 'смех', 'грустный', 'испуганный', 'улыбка', 'удивленный', 'уставший'];

class Emotion extends Page {
  private card: Card;
  constructor(id: string) {
    super(id);
    this.card = new Card();
  }

  render() {
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRus[i], namePicturesEn[i], 'Emotion'));
    }
    return this.container;
  }
}

export default Emotion;
