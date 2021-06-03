import Page from '../../core/templates/page';

export class StatisticsPage extends Page {
  static TextObject = {
    MainTitle: 'statistics-page',
  };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(id: string) {
    super(id);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const title = this.createHeaderTitle(StatisticsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}
