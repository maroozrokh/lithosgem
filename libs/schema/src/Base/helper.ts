/**
 * mongoose
 */

import { BadRequestException } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');
/**
 * String to objectId
 * @param str string
 * @returns
 */
export function str2objectId(str: any) {
  try {
    if (typeof str === 'string') return new mongoose.Types.ObjectId(str);
    return str;
  } catch (err) {
    return null;
  }
}
export const SafeMongoIdTransform = ({ value }) => {
  try {
    if (
      mongoose.Types.ObjectId.isValid(value) &&
      new mongoose.Types.ObjectId(value).toString() === value
    ) {
      return str2objectId(value);
    }
    throw new BadRequestException('Id validation fail');
  } catch (error) {
    throw new BadRequestException('Id validation fail');
  }
};
/**
 * String to search
 * @param str string
 * @returns
 */
export function str2search(str: any) {
  try {
    if (typeof str === 'string') return new RegExp(str, 'i');
    return str;
  } catch (err) {
    return null;
  }
}
export const ObjectId = mongoose.Schema.Types.ObjectId;
export const Mixed = mongoose.Schema.Types.Mixed;
export const relation = (
  from: string,
  conditions: any,
  pipeline: any,
  as: any,
) => {
  return {
    $lookup: {
      from,
      let: { ...conditions },
      pipeline,
      as,
    },
  };
};
