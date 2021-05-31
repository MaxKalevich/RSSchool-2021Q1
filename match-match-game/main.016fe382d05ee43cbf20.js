(()=>{"use strict";var e={76:(e,t,n)=>{n.r(t)},80:(e,t,n)=>{n.r(t)},510:(e,t,n)=>{n.r(t)},528:(e,t,n)=>{n.r(t)},231:(e,t,n)=>{n.r(t)},11:(e,t,n)=>{n.r(t)},387:(e,t,n)=>{n.r(t)},752:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{d(i.next(e))}catch(e){o(e)}}function a(e){try{d(i.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const s=n(229),o=n(366),r=n(609);t.App=class{constructor(e){this.rootElement=e,this.header=new o.Header,this.rootElement.appendChild(this.header.element),this.stopwatch=new r.Stopwatch,this.rootElement.appendChild(this.stopwatch.element),this.game=new s.Game,this.rootElement.appendChild(this.game.element)}start(){return i(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=(yield e.json())[0],n=t.images.map((e=>`${t.category}/${e}`));this.game.newGame(n),this.stopwatch.timer(!1)}))}}},583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;const i=n(583);n(76);class s extends i.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e,this.isFlipped=!1,this.element.innerHTML=`\n  <div class="card">\n    <div class="card__front" style="background-image: url('/match-match-game/public/images/${e}')"></div>\n    <div class="card__back"></div>\n  </div>\n    `}flipToBack(){return this.isFlipped=!0,this.flip(!0)}flipToFront(){return this.isFlipped=!1,this.flip()}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("flipped",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.Card=s},610:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0;const i=n(583);n(80);class s extends i.BaseComponent{constructor(){super("div",["cards-field"]),this.cards=[]}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){this.cards=e,this.cards.forEach((e=>this.element.appendChild(e.element))),setTimeout((()=>{this.cards.forEach((e=>e.flipToBack()))}),5e3)}}t.CardsField=s},229:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{d(i.next(e))}catch(e){o(e)}}function a(e){try{d(i.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const s=n(680),o=n(583),r=n(977),a=n(610);class d extends o.BaseComponent{constructor(){super(),this.isAnimation=!1,this.cardsField=new a.CardsField,this.element.appendChild(this.cardsField.element)}newGame(e){this.cardsField.clear();const t=e.concat(e).map((e=>new r.Card(e))).sort((()=>Math.random()-.5));t.forEach((e=>e.element.addEventListener("click",(()=>this.cardHandler(e))))),this.cardsField.addCards(t)}cardHandler(e){return i(this,void 0,void 0,(function*(){if(!this.isAnimation&&e.isFlipped){if(this.isAnimation=!0,yield e.flipToFront(),!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.activeCard.image!==e.image&&(yield s.delay(3e3),yield Promise.all([yield this.activeCard.flipToBack(),e.flipToBack()])),this.activeCard=void 0,this.isAnimation=!1}}))}}t.Game=d},870:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const i=n(583);n(510);const s=n(609);class o extends i.BaseComponent{constructor(){const e=new s.Stopwatch;super("button",["button"]),this.element.innerHTML="STOP GAME",this.element.onclick=()=>{e.timer(!0)}}}t.Button=o},366:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const i=n(583);n(528);const s=n(870),o=n(378);class r extends i.BaseComponent{constructor(){super("div",["header"]),this.logo=new o.Logo,this.element.appendChild(this.logo.element),this.button=new s.Button,this.element.appendChild(this.button.element)}}t.Header=r},378:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=void 0;const i=n(583);n(231);class s extends i.BaseComponent{constructor(){super("div",["logo"]),this.element.innerHTML='\n<div style="display: flex; justify-content: space-between">\n<div>\n    <div style="padding-left: 40px; padding-top: 5px;">Match</div>\n    <div style="background-color: #fff; width: 80px; height: 20px; color: rgba(33, 150, 243, 1);\n    padding-left: 20px; margin-left: 20px;">Match</div>\n</div>\n</div>\n    '}}t.Logo=s},609:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Stopwatch=void 0;const i=n(583);n(11);class s extends i.BaseComponent{constructor(){super("div",["seconds"]),this.counter=0,this.action=!1,this.action=!1,this.element.innerHTML='<span style="color: red;">This is Timer</span>'}timer(e){this.counter++,this.element.innerHTML=`<span style="color: red; padding: 120px; line-height: 64px;">${this.counter}</span>`,e?clearTimeout():setTimeout((()=>this.timer()),1e3)}}t.Stopwatch=s},680:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(387);const e=n(752),t=n(609);window.onload=()=>{const n=document.body;if((new t.Stopwatch).timer(),!n)throw Error("No App");new e.App(document.body).start()}})()})();