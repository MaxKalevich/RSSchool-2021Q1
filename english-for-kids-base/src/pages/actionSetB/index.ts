import Page from '../../core/templates/page';
import Card from '../../components/card';
import Footer from '../../components/footer';
import { getCategories } from '../../EFK-API/categoriesAPI';

// const namePicturesEn: Array<string> = ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'];
// const namePicturesRu: Array<string> = ['открывать', 'играть', 'указывать', 'ездить',
//   'бегать', 'петь', 'пропускать, прыгать', 'плавать'];

class ActionSetB extends Page {
  private card: Card;

  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.card = new Card();
    this.footer = new Footer();
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle('Action (Set B)');
    title.className = 'heading-all-pages';
    title.style.width = '100%';
    this.container.append(title);
    this.container.append(this.card.createRating());
    getCategories().then(r => {
      r.forEach((item: any) => {
        item.filter((item: any) => {
          if (item.word !== undefined && item.category === 'Action (Set B)') {
            this.container.append(this.card.createCard(item.word, item.translation,
              item.img, 'categoryActionSetB'));
          };
        });
    });
    this.card.createStartButton();
    this.container.append(this.footer.createFooter());
    }
    )
    return this.container;
  }
}

export default ActionSetB;
