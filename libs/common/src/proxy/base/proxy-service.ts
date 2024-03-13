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
/////////////////////////////////////
// import { IEditeGem, IFindAllGem, IFindOneId, IGem } from '@libs/interface';
// import { lastValueFrom, map } from 'rxjs';
// import { GemPattern } from '../gem';

// export abstract class AProxy<T> {
//   private client: any;

//   protected constructor(client: T) {
//     this.client = client;
//   }

//   public async pingCheck() {
//     try {
//       await this.client.connect();
//       return 'connected';
//     } catch (error) {
//       return error?.message;
//     }
//   }

  // اضافه کردن هندلرها برای پردازش پیام‌ها
  // public async handleAddGem(payload: IGem) {
  //   return this.send(GemPattern.ADD_GEM, payload);
  // }

//   public async handleFindAllGem(payload: IFindAllGem) {
//     return this.send(GemPattern.FIND_ALL_GEM, payload);
//   }

//   public async handleFindOneGem(payload: IFindOneId) {
//     return this.send(GemPattern.FIND_ONE_GEM, payload);
//   }

//   public async handleUpdateGem(payload: IEditeGem) {
//     return this.send(GemPattern.UPDATE_GEM, payload);
//   }

//   public async handleDeleteGem(payload: IFindOneId) {
//     return this.send(GemPattern.DELETE_GEM, payload);
//   }

//   public async handleUpdateImage(payload: any) {
//     return this.send(GemPattern.UPDATE_IMAGE, payload);
//   }

//   // متد ارسال پیام با استفاده از روش‌های RxJS
//   public async send(pattern: string, data = {}): Promise<any | null> {
//     try {
//       return lastValueFrom(
//         this.client.send(pattern, data).pipe(
//           map((response) => {
//             return response;
//           }),
//         ),
//       ).catch((error) => {
//         console.log(`Exception occurred in ${pattern} =`, error);
//         return { error: true, message: error?.message };
//       });
//     } catch (error) {
//       console.log(`Exception occurred in ${pattern} =`, error);
//       return { error: true, message: error?.message };
//     }
//   }
// }