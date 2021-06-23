import Page from '../page';
import { getWinners } from '../../winnersPageAPI';
import { winnerTable } from '../../components/winnerTable/winnerTable';
import { pagination, renderPage } from '../../components/winnerTable/pagination/pagination';

class Winners extends Page {
  private readonly winnersCount: HTMLElement;

  private id: string;

  constructor(id: string) {
    super(id);
    this.id = id;
    this.winnersCount = this.addTagFromPage('WINNERS');
    this.winnersCount.className = 'winners-count-header';
    this.winnersCount.style.fontSize = '25px';
    this.container.append(this.winnersCount);
    this.getCountWinners();
    winnerTable(this.container);
    pagination(this.container);
  }

  getCountWinners() {
    getWinners(1, 1).then((response) => {
      this.winnersCount.innerText = `WINNERS (${response})`;
    });
  }

  render(): HTMLElement {
    renderPage();
    return this.container;
  }
}

export default Winners;
