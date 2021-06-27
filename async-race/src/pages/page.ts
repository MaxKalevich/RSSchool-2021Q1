abstract class Page {
  protected container: HTMLElement;

  protected constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected addTagFromPage(text: string): HTMLElement {
    const tagHtml = document.createElement('div');
    tagHtml.innerText = text;
    tagHtml.style.margin = '10px';
    return tagHtml;
  }

  render() {
    return this.container;
  }
}

export default Page;
