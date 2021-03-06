export class SnakeToCamelAdapter {
  private regExp = /([_][a-z])/ig;

  public transformArray<T>(value: Array<Record<string, unknown>>): Array<T> {
    return value.map((item) => this.transform<T>(item));
  }

  public transform<T>(value: Record<string, unknown>): T {
    const entries = Object.entries(value)
      .map(([key, val]) => [this.transformSnakeToCamel(key), val]);
    return Object.fromEntries(entries);
  }

  private transformSnakeToCamel(value: string): string {
    return value.replace(this.regExp, this.replacer);
  }

  private replacer = (match: string): string =>
    match.replace('_', '').toUpperCase();
}
