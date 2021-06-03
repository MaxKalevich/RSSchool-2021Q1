abstract class Page {
  protected readonly container: HTMLElement;

  static TextObject = {};

  protected constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,class-methods-use-this
  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    return headerTitle;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/explicit-module-boundary-types
  protected createDivTitle(text: string) {
    const divTitle = document.createElement('div');
    divTitle.innerText = text;
    return divTitle;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return this.container;
  }
}

export default Page;
