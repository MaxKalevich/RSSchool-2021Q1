import Page from '../page';

class Winners extends Page {
  private id: string;
  constructor(id: string) {
    super(id);
    this.id = id;
  }

  render() {
    const title = this.addTagFromPage('WINNERS!');
    this.container.append(title);
    return this.container;
  }
}

export default Winners;
