export class TokenStorage {
  private tokenName: string;

  constructor(tokenName: string) {
    this.tokenName = tokenName;
  }

  public setToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.tokenName) ?? '';
  }

  public removeToken(): void {
    localStorage.removeItem(this.tokenName);
  }
}

