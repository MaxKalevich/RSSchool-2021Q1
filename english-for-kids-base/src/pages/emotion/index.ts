import Page from '../../core/templates/page';
import Card from '../../components/card';
import Footer from '../../components/footer';
import { getCategories } from '../../EFK-API/categoriesAPI';

// const namePicturesEn: Array<string> = ['angry', 'happy', 'laugh', 'sad', 'scared', 'smile', 'surprised', 'tired'];
// const namePicturesRu: Array<string> = ['сердитый', 'счастливый', 'смех',
//   'грустный', 'испуганный', 'улыбка', 'удивленный', 'уставший'];

class Emotion extends Page {
  private card: Card;

  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.card = new Card();
    this.footer = new Footer();
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle('Emotion');
    title.className = 'heading-all-pages';
    title.style.width = '100%';
    this.container.append(title);
    this.container.append(this.card.createRating());
    getCategories().then(r => {
      r.forEach((item: any) => {
        item.filter((item: any) => {
          if (item.word !== undefined && item.category === 'Emotion') {
            this.container.append(this.card.createCard(item.word, item.translation,
              item.img, 'Emotion'));
          };
        });
    });
    this.card.createStartButton();
    this.container.append(this.footer.createFooter());
    });
    return this.container;
  }
}

export default Emotion;
