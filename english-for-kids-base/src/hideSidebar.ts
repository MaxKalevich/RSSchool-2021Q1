export function hideSidebar() {
  const sidebar: HTMLElement | null = document.querySelector('.menu__box');
  const button: HTMLElement | null = document.querySelector('.menu__btn');
// @ts-ignore
  const checkbox: HTMLInputElement | null = document.getElementById('menu__toggle');
  const span: HTMLElement | null = document.querySelector('span');

  document.onmouseup = (e) => {
    // @ts-ignore
    if (e.target !== sidebar && e.target !== span && e.target !== button && checkbox.checked === true) {
      // @ts-ignore
      checkbox.checked = false;
    }
  };
}
