export interface IUser {
  isAuthenticated: boolean;
  name: string;
  accessToken: string;
  refreshToken: string;
}
