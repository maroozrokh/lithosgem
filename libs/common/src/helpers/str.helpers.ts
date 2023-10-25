/**
 * UUID
 * @returns string
 */
export function uuid(): string {
  function uuid4(length = 4): string {
    const possibleFull = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    const possible = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let string = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      if (i === 0) {
        string += possible.charAt(Math.floor(Math.random() * possible.length));
        continue;
      }
      string += possibleFull.charAt(
        Math.floor(Math.random() * possibleFull.length),
      );
    }
    return string;
  }

  return `${uuid4(8)}-${uuid4(4)}-${uuid4(4)}-${uuid4(4)}-${uuid4(12)}`;
}

export const getUrlQuery = (params: any): string => {
  return new URLSearchParams(params).toString();
};
