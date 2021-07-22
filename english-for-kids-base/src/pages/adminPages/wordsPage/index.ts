import Page from '../../../core/templates/page';
import App from '../../app/index';

class AdminWordsPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const head: HTMLElement = document.createElement('header');
    head.className = 'head';
    this.container.append(head);

    const catWrapper: HTMLElement = document.createElement('div');
    catWrapper.className = 'cat-wrapper';
    head.append(catWrapper);

    const categories: HTMLAnchorElement = document.createElement('a');
    categories.className = 'categories';
    categories.href = '#admin-categories-page';
    categories.textContent = 'Categories';
    catWrapper.append(categories);

    const words: HTMLAnchorElement = document.createElement('a');
    words.className = 'words';
    words.href = '#admin-words-page';
    words.textContent = 'Words';
    catWrapper.append(words);

    const logOut: HTMLButtonElement = document.createElement('button');
    logOut.className = 'log-out';
    logOut.textContent = 'Log Out';
    logOut.addEventListener('click', () => {
      localStorage.removeItem('token');
      App.renderNewPage('main-page');
      history.pushState({}, 'null', '#main-page');
      const head = document.querySelector('.header-wrapper');
      if (head !== null) {
        head.style.display = 'flex';
      }
    });
    head.append(logOut);

    const header: HTMLElement | null = document.querySelector('.header-wrapper');
    if (header !== null) {
      header.style.display = 'none';
    }

    const wordsWrapper = document.createElement('div');
    wordsWrapper.textContent = 'Words';
    this.container.append(wordsWrapper);
    return this.container;
  }
}

export default AdminWordsPage;
