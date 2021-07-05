import Page from '../../core/templates/page';
import Card from '../../components/card';
import Footer from '../../components/footer';

const namePicturesEn: Array<string> = ['BMW', 'Bugatti', 'DeLorean', 'Lada',
  'Lamborghini', 'Mercedes', 'Rolls Royse', 'Tesla'];
const namePicturesRu: Array<string> = ['БМВ', 'Бугатти', 'ДеЛореан', 'Лада',
  'Ламба', 'Мерседес', 'Роллс Ройс', 'Тесла'];

class ActionSetC extends Page {
  private card: Card;

  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.card = new Card();
    this.footer = new Footer();
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle('Auto');
    title.className = 'heading-all-pages';
    title.style.width = '100%';
    this.container.append(title);
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRu[i], namePicturesEn[i], 'auto'));
    }
    this.card.createStartButton();
    this.container.append(this.footer.createFooter());
    return this.container;
  }
}

export default ActionSetC;
