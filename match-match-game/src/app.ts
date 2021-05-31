import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';
import { Header } from './components/header/header';
import { Stopwatch } from './components/stopwatch/stopwatch';

export class App {
  private readonly header: Header;

  private readonly stopwatch: Stopwatch;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);

    this.stopwatch = new Stopwatch();
    this.rootElement.appendChild(this.stopwatch.element);

    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
    this.stopwatch.timer(false);
  }
}
