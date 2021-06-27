import Page from '../../core/templates/page';

export const enum ErrorTypes {
  ERROR_404 = 404,
}

class ErrorPage extends Page {
  private errorType: ErrorTypes | string;
  constructor(id: string, errorType: ErrorTypes | string) {
    super(id);
    this.errorType = errorType;
  }

  render() {
    const title = this.createHeaderTitle('Error!');
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;
