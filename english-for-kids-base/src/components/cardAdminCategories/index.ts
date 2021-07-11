import './style_card_admin.scss';
import { state } from '../../stateApp/state';

class CardAdminCategories {
  private readonly container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'card-container';
  }

  createCardMainPage(categoryName: string, imageName: string, wordsCount: string): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card_main';
    this.container.append(card);

    const cardFront = document.createElement('div');
    cardFront.className = 'card__front_main';
    cardFront.style.backgroundImage = `url('/categories/${imageName}.jpg')`;
    card.append(cardFront);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-signature_main';
    cardHeader.innerText = categoryName;
    cardFront.append(cardHeader);

    const wordsCountTag = document.createElement('div');
    wordsCountTag.className = 'card-signature_main_2';
    wordsCountTag.innerText = `Words: ${wordsCount}`;
    cardFront.append(wordsCountTag);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'btn-wrapper';
    cardFront.append(buttonWrapper);

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn-delete';

    buttonWrapper.append(buttonDelete);

    const btnUpdate = document.createElement('button');
    btnUpdate.className = 'update';
    btnUpdate.textContent = 'UPDATE';
    buttonWrapper.append(btnUpdate);

    const btnAddWord = document.createElement('button');
    btnAddWord.className = 'add-word';
    btnAddWord.textContent = 'ADD WORD';
    buttonWrapper.append(btnAddWord);
    return card;
  }
}

export default CardAdminCategories;
