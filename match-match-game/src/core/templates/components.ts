abstract class Component {
  protected container: HTMLElement;

  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return this.container;
  }
}

export default Component;
