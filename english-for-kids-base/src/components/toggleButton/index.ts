import './style.scss';

class ToggleButton {
  private tagLabel: HTMLLabelElement;

  constructor() {
    this.tagLabel = document.createElement('label');
    this.tagLabel.className = 'switch';
  }

  createButton() {
    const tagInput: HTMLInputElement = document.createElement('input');
    tagInput.type = 'checkbox';
    this.tagLabel.append(tagInput);

    const tagDivSlider: HTMLElement = document.createElement('div');
    tagDivSlider.className = 'slider';
    this.tagLabel.append(tagDivSlider);

    const tagDivText: HTMLElement = document.createElement('div');
    tagDivText.className = 'text';
    this.tagLabel.appendChild(tagDivText);
    return this.tagLabel;
  }
}

export default ToggleButton;
