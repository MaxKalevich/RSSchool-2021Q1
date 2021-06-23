import Garage from '../garage-page/garage';
import Winners from '../winners-page/winners';
import Page from '../page';
import { GarageButton } from '../../components/button/garageButton/garageButton';
import { WinnersButton } from '../../components/button/winnersButton/winnersButton';

const enum PageID {
  GARAGE_PAGE = 'garage-page',
  WINNERS_PAGE = 'winners-page',
  CURRENT_PAGE = 'current-page',
}

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageID: string = PageID.CURRENT_PAGE;

  private initialPage: Garage;

  static renderNewPage(idPage: string): void {
    const currentPageHTML = document.querySelector(`#${App.defaultPageID}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageID.GARAGE_PAGE) {
      page = new Garage(idPage);
    }

    if (idPage === PageID.WINNERS_PAGE) {
      page = new Winners(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageID;
      App.container.append(pageHTML);
    }
  }

  enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new Garage(PageID.GARAGE_PAGE);
  }

  run(): void {
    new GarageButton(document.body);
    new WinnersButton(document.body);
    this.enableRouteChange();
  }
}

export default App;
