import Garage from "../../pages/garage-page/garage";
import Winners from "../../pages/winners-page/winners";

export class State {
  garagePage: Garage;
  winnersPage: Winners;

  constructor() {
    this.garagePage = new Garage('garage-page');
    this.winnersPage = new Winners('winners-page');
  }

}
