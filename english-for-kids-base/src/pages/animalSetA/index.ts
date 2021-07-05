import Page from '../../core/templates/page';
import Card from '../../components/card';
import Footer from '../../components/footer';

const namePicturesEn: Array<string> = ['cat', 'chick', 'chicken', 'dog',
  'horse', 'pig', 'rabbit', 'sheep'];
const namePicturesRu: Array<string> = ['кот', 'цыплёнок', 'курица', 'собака', 'лошадь', 'свинья', 'кролик', 'овца'];

class AnimalSetA extends Page {
  private card: Card;

  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.card = new Card();
    this.footer = new Footer();
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle('Animal (Set A)');
    title.className = 'heading-all-pages';
    title.style.width = '100%';
    this.container.append(title);
    for (let i = 0; i < 8; i++) {
      this.container.append(this.card.createCard(namePicturesEn[i], namePicturesRu[i],
        namePicturesEn[i], 'animalSetA'));
    }
    this.card.createStartButton();
    this.container.append(this.footer.createFooter());
    return this.container;
  }
}

export default AnimalSetA;
