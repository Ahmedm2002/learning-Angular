export class Customer {
  constructor() {
    (this.userId = 0),
      (this.userName = ''),
      (this.emailId = ''),
      (this.fullName = ''),
      (this.role = ''),
      (this.password = ''),
      (this.projectName = ''),
      (this.refreshToken = false),
      (this.refreshTokenExpiryTime = false);
  }

  userId: number;
  userName: string;
  emailId: string;
  fullName: string;
  role: string;
  createdDate?: Date;
  password: string;
  projectName: string;
  refreshToken: boolean;
  refreshTokenExpiryTime: boolean;
}
