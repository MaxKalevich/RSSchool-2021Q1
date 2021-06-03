import Page from '../../core/templates/page';

export class SettingsPage extends Page {
  static TextObject = {
    MainTitle: 'settings-page',
  };

  constructor(private id: string) {
    super(id);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}
