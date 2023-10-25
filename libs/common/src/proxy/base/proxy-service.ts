import { lastValueFrom, map } from 'rxjs';

export abstract class AProxy<T> {
  private client: any;

  protected constructor(client: T) {
    this.client = client;
  }
  public async pingCheck() {
    try {
      await this.client.connect();
      return 'connected';
    } catch (error) {
      return error?.message;
    }
  }
  public async send(pattern: string, data = {}): Promise<any | null> {
    try {
      return lastValueFrom(
        this.client.send(pattern, data).pipe(
          map((response) => {
            return response;
          }),
        ),
      ).catch((error) => {
        console.log(`exption one error in ${pattern} =`, error);
        return { error: true, message: error?.message };
      });
    } catch (error) {
      console.log(`exption two error in ${pattern} =`, error);
      return { error: true, message: error?.message };
    }
  }
}
