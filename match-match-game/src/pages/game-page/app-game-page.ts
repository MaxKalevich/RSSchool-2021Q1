import Page from '../../core/templates/page';
import { Game } from '../../components/game/game';
import { ImageCategoryModel } from '../../models/image-category-model';

export class AppGamePage extends Page {
  private readonly game: Game;

  constructor(id: string) {
    super(id);
    this.game = new Game();
    this.container.appendChild(this.game.element);
    this.container.style.background = 'url(.//images/texture.jpg)';
    this.container.style.height = '700px';
    this.container.style.backgroundSize = 'cover';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    this.start();

    return this.container;
  }
}
