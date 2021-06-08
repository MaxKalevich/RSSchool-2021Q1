import { BaseComponent } from '../base-component';
import './modal-window.scss.css';

export class ModalWindow extends BaseComponent {
  constructor() {
    super();
    this.element.innerHTML = `
        <div class="hystmodal" id="myModal"
        style="position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 99;
  padding:30px 0;">
    <div class="hystmodal__window" style="background: skyblue;
    width: 600px;
    height: 400px;
    border-radius: 10px;
    max-width: 100%;
    transition: transform 0.15s ease 0s, opacity 0.15s ease 0s;
    transform: scale(1);">
    <div style="margin: 50px">Игра окончена.</div>
        <button style="cursor: pointer; border: 0; margin-left: 250px; margin-top: 200px; width: 80px;
        height: 40px; border-radius: 25px;" data-hystclose class="hystmodal__close">Close</button>
    </div>
</div>
        `;
  }
}
