export interface AuthResponse {
  user: {
    accessToken: string;
    expiresIn: number;
  };
}
