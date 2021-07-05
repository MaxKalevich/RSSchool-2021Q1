import Page from '../../core/templates/page';
import Card from '../../components/card';
import Footer from '../../components/footer';

const namePicturesEn: Array<string> = ['large', 'fast', 'friendly', 'old', 'slow', 'little', 'unfriendly', 'young'];
const namePicturesRus: Array<string> = ['большой', 'быстрый', 'дружелюбный', 'старый', 'медленный', 'маленький', 'недружелюбный', 'молодой'];

class Adjective extends Page {
  private card: Card;

  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.card = new Card();
    this.footer = new Footer();
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle('Adjective');
    title.className = 'heading-all-pages';
    title.style.width = '100%';
    this.container.append(title);
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRus[i], namePicturesEn[i], 'adjective'));
    }
    this.card.createStartButton();
    this.container.append(this.footer.createFooter());
    return this.container;
  }
}

export default Adjective;
