import Page from '../../core/templates/page';
import './style_main.scss';
import Footer from '../../components/footer';
import { threeCatsImages } from '../../stateApp/state';
import { categories } from '../../stateApp/categories';
import CardMain from '../../components/cardMainPage';

const idAdressForCards: Array<string> = ['actionSetA-page', 'actionSetB-page', 'Auto', 'adjective-page', 'animalSetA-page', 'animalSetB-page', 'clothes-page', 'emotion-page'];

class MainPage extends Page {
  private card: CardMain;

  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.card = new CardMain();
    this.footer = new Footer();
  }

  render() {
    const title = this.createHeaderTitle('Train & Play');
    title.className = 'train-play';
    this.container.append(title);
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCardMainPage(categories[i], idAdressForCards[i], threeCatsImages[i]));
    }
    this.container.appendChild(this.footer.createFooter());
    return this.container;
  }
}

export default MainPage;
