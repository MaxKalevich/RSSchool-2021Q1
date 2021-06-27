import Page from '../../core/templates/page';
import Card from '../../components/card';

const namePicturesEn: Array<string> = ['cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump'];
const namePicturesRus: Array<string> = ['плакать', 'танцевать', 'нырять', 'рисовать', 'ловить рыбу', 'летать', 'обнимать', 'прыгать'];

class ActionSetA extends Page {
  private card: Card;
  constructor(id: string) {
    super(id);
    this.card = new Card();
  }

  render() {
    // const title = this.createHeaderTitle('ActionSetA');
    // this.container.append(title);
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRus[i], namePicturesEn[i], 'categoryActionSetA'));
    }
    return this.container;
  }
}

export default ActionSetA;
