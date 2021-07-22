import './style_footer.scss';

class Footer {
  private readonly container: HTMLElement;

  constructor() {
    this.container = document.createElement('footer');
  }

  createFooter(): HTMLElement {
    const createdYear: HTMLElement = document.createElement('div');
    createdYear.className = 'created';
    createdYear.innerText = '2021';
    this.container.append(createdYear);

    const linkAuthor: HTMLAnchorElement = document.createElement('a');
    linkAuthor.className = 'link_author';
    linkAuthor.href = 'https://github.com/MaxKalevich';
    linkAuthor.target = 'blank_1';
    this.container.append(linkAuthor);

    const rsLogo: HTMLAnchorElement = document.createElement('a');
    rsLogo.className = 'rs-school';
    rsLogo.href = 'https://rs.school/js/';
    rsLogo.target = 'blank_1';
    this.container.append(rsLogo);
    return this.container;
  }
}

export default Footer;
