import Page from '../../core/templates/page';
import CardMain from '../../components/cardMain';
import { categories } from '../../categories';

const idAdressForCards: Array<string> = ['actionSetA-page', 'actionSetB-page', 'actionSetC-page', 'adjective-page', 'animalSetA-page', 'animalSetB-page', 'clothes-page', 'emotion-page'];

class MainPage extends Page {
  private card: CardMain;

  constructor(id: string) {
    super(id);
    this.card = new CardMain();
  }

  render() {
   // const title = this.createHeaderTitle('Main-Page');
  //  this.container.append(title);
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(categories[i], idAdressForCards[i]));
    }

    return this.container;
  }
}

export default MainPage;
