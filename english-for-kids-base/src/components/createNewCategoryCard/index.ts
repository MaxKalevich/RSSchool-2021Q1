import './style_create_new_cat.scss';

class CreateNewCategory {
  private readonly container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'new-category__wrapper';
  }

  create(): HTMLElement {
    const cardFront: HTMLElement = document.createElement('div');
    cardFront.className = 'card__new';
    cardFront.style.backgroundImage = "url('/create.png')";
    this.container.append(cardFront);

    const heading: HTMLHeadingElement = document.createElement('h2');
    heading.textContent = 'Create New Category';
    heading.style.textAlign = 'center';
    cardFront.append(heading);
    return this.container;
  }
}

export default CreateNewCategory;
