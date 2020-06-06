export class CommonConst {
  public static currentUser;
  constructor() {}

  public getCurrentUser() {
    return CommonConst.currentUser;
  }

  public setCurrentUser(user) {
    CommonConst.currentUser = user;
  }
}
