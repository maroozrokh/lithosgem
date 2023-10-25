declare global {
  interface Date {
    getUtc(): Date;
  }
}
import * as moment from 'moment-timezone';
Date.prototype.getUtc = function (): Date {
  return moment.utc().toDate();
};
console.log(new Date().getUtc());
export default {};
