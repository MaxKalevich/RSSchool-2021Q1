import { BaseComponent } from '../../base-component';
import './logo.scss';

export class Logo extends BaseComponent {
  constructor() {
    super('div', ['logo']);
    this.element.innerHTML = `
<div style="display: flex; justify-content: space-between">
<div>
    <div style="padding-left: 40px; padding-top: 5px;">Match</div>
    <div style="background-color: #fff; width: 80px; height: 20px; color: rgba(33, 150, 243, 1);
    padding-left: 20px; margin-left: 20px;">Match</div>
</div>
</div>
    `;
  }
}
