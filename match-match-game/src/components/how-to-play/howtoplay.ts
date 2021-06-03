import { BaseComponent } from '../base-component';

export class Howtoplay extends BaseComponent {
  constructor() {
    super('div', ['howtoplay']);
    this.element.innerHTML = `
<h1 style="margin: 30px 0 0 150px;">How To Play?</h1>
<div style='display: flex;'>
<div style='width: 520px;'>
<div style=" margin: 20px 0 0 150px; width: 360px; height: 150px;
background-color: rgba(0, 0, 0, 0.05);; border-radius: 10px;">
<div style="margin: 10px 0 0 20px;">
<div style="float: left;
margin-top: 10px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2196f3;
    font-size: 24px;
    line-height: 21px;
    margin-right: 10px;">1</div>
    <p style="font-size: 18px; padding-top: 19px">Register new player in game</p>
</div>
</div>

<div style=" margin: 20px 0 0 150px; width: 360px; height: 150px; background-color: rgba(0, 0, 0, 0.05);
border-radius: 10px;">
<div style="margin: 10px 0 0 20px;">
<div style="float: left;
margin-top: 10px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2196f3;
    font-size: 24px;
    line-height: 21px;
    margin-right: 10px;">2</div>
    <p style=" font-size: 18px; padding-top: 19px">Configure your game settings</p>
</div>
</div>

<div style="margin: 20px 0 0 150px; width: 360px; height: 150px;
background-color: rgba(0, 0, 0, 0.05); border-radius: 10px;">
<div style="margin: 10px 0 0 20px;">
<div style="float: left;
margin-top: 10px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2196f3;
    font-size: 24px;
    line-height: 21px;
    margin-right: 10px;">3</div>
    <p style="padding-left: 50px; padding-top: 19px; width: 250px; font-size: 17px;">
    Start you new game! Remember card positions and match it before times up.</p>
</div>
</div>
</div>
<div style=" padding-top: 50px; padding-left: 50px; margin: 20px 0 0 200px; width: 460px;
height: 350px; background-color: rgba(0, 0, 0, 0.05); border-radius: 10px;">
<h1>Registr new Player</h1>
<form action style="margin-top: 30px;">
<input class="name" style="width: 360px;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0,0,0,.87);
    padding: 5px;" type="text" placeholder="First Name" maxlength='30' required>
    <div class="name-input" style="margin-top: 15px; width: 200px;
    height: 30px; background-color: silver; font-size: 12px;">- Имя не может быть пустым.
- Имя не может состоять из цифр.</div>
<input class='input-last-name' style="width: 360px;
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
    color: rgba(0,0,0,.87);
    padding: 5px;" type="text" placeholder="Last Name" name="text" required maxlength='30'>
        <div class="last-name-input" style="margin-top: 15px; width: 200px;
    height: 43px; background-color: silver; font-size: 12px;">- Фамилия не может быть пустой.
- Фамилия не может состоять из цифр.</div>
<input style="width: 360px;
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
    color: rgba(0,0,0,.87);
    padding: 5px;" type="email" placeholder="Enter Email" name="email" required maxlength='30'>
    <button class="send" style="margin-top: 30px; width: 160px; height: 25px;">Autorized</button>
    <button style="margin-top: 30px; margin-left: 49px; width: 160px; height: 25px;">Chancel</button>
</form>
</div>
</div>
    `;
  }
}
