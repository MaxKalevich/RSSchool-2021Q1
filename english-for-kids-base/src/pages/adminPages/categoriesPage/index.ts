import './style_words.scss';
import Page from '../../../core/templates/page';
import CardAdminCategories from '../../../components/cardAdminCategories';
import CreateNewCategory from '../../../components/createNewCategoryCard';

class AdminCategoriesPage extends Page {
  private card: CardAdminCategories;

  private create: CreateNewCategory;

  constructor(id: string) {
    super(id);
    this.card = new CardAdminCategories();
    this.create = new CreateNewCategory();
  }

  render(): HTMLElement {
    const head = document.createElement('header');
    head.className = 'head';
    this.container.append(head);

    const catWrapper = document.createElement('div');
    catWrapper.className = 'cat-wrapper';
    head.append(catWrapper);

    const categories = document.createElement('a');
    categories.className = 'categories';
    categories.href = '#admin-categories-page';
    categories.textContent = 'Categories';
    catWrapper.append(categories);

    const words = document.createElement('a');
    words.className = 'words';
    words.href = '#admin-words-page';
    words.textContent = 'Words';
    catWrapper.append(words);

    const logOut = document.createElement('button');
    logOut.className = 'log-out';
    logOut.textContent = 'Log Out';
    head.append(logOut);

    const header: HTMLElement | null = document.querySelector('.header-wrapper');
    if (header !== null) {
      header.style.display = 'none';
    }

    const mainContentWrapper = document.createElement('div');
    mainContentWrapper.className = 'content-wrapper';
    this.container.append(mainContentWrapper);

    mainContentWrapper.append(this.card.createCardMainPage('Auto', 'Auto', '7'));
    mainContentWrapper.append(this.card.createCardMainPage('Clothes', 'Clothes', '7'));
    mainContentWrapper.append(this.card.createCardMainPage('Animal', 'Clothes', '7'));
    mainContentWrapper.append(this.card.createCardMainPage('Forest', 'Clothes', '7'));
    mainContentWrapper.append(this.card.createCardMainPage('Films', 'Clothes', '7'));
    mainContentWrapper.append(this.create.create());
    return this.container;
  }
}

export default AdminCategoriesPage;
