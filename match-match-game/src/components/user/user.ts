export class User {
  userName: string | null;
  userEmail: null | string;
  userAvatar: string;
  userScore: number;
  lastName: string | null;
  constructor(
    firstName = null,
    lastName = null,
    emailName = null,
    avatar = './assets/images/avatar.png',
    curScore = 0) {
    this.userName = firstName;
    this.lastName = lastName;
    this.userEmail = emailName;
    this.userAvatar = avatar;
    this.userScore = curScore;
  }
}

