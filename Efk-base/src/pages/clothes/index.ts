import Page from '../../core/templates/page';
import Card from '../../components/card';
import Footer from '../../components/footer';
import { getCategories } from '../../EFK-API/categoriesAPI';

class Clothes extends Page {
  private card: Card;

  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.card = new Card();
    this.footer = new Footer();
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle('Clothes');
    title.className = 'heading-all-pages';
    title.style.width = '100%';
    this.container.append(title);
    this.container.append(this.card.createRating());
    getCategories().then((r) => {
      r.forEach((item: any) => {
        item.filter((items: any) => {
          if (items.word !== undefined && items.category === 'Clothes') {
            this.container.append(this.card.createCard(items.word, items.translation,
              items.img, 'Clothes'));
          }
        });
    });
    this.card.createStartButton();
    this.container.append(this.footer.createFooter());
    });
    return this.container;
  }
}

export default Clothes;
