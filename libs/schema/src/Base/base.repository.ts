import { Model, QueryWithHelpers, UpdateWriteOpResult } from 'mongoose';
import { str2objectId } from './helper';

export abstract class BaseRepository<T> {
  private entity: Model<T>;

  protected constructor(entity: Model<T>) {
    this.entity = entity;
  }

  public async create(data: T | any): Promise<T | any> {
    return await this.entity.create(data);
  }
  public async saveOne(data: T | any): Promise<T | any> {
    const m = new this.entity(data);
    return await m.save();
  }
  public insertMany(data: any): Promise<T | any> {
    return this.entity.insertMany(data);
  }

  public findOneById(_id: any) {
    return this.entity.findOne({ _id });
  }
  async findOne(pipeline?: Array<any>, options?: any) {
    const data = await this.entity.aggregate(pipeline, options);
    if (data && data.length > 0) {
      return data.at(0);
    }
    return null;
  }
  public existsById(_id: any) {
    return this.entity.exists({ _id });
  }
  public existsByCondition(condition: any) {
    return this.entity.exists(condition);
  }
  public findOneByCondition(filterCondition: any) {
    return this.entity.findOne(filterCondition);
  }
  public findByCondition(filterCondition: any) {
    return this.entity.find(filterCondition);
  }
  public countByCondition(filterCondition: any) {
    return this.entity.count(filterCondition);
  }

  public async findWithRelations(relations: any): Promise<T[]> {
    return await this.entity.find(relations);
  }
  public async pagination(
    options: Array<any>,
    page?: number,
    count?: number,
    $match?: any,
  ) {
    if (!page || page < 0) page = 0;
    if (!count || count <= 0) count = 15;
    const skip = page * count;
    const data = this.entity
      .aggregate([...options, { $skip: skip }, { $limit: count }])
      .exec();
    const total = this.entity.count($match ? $match : options[0].$match).exec();
    return {
      data: await data,
      total: await total,
    };
  }
  public findWithAggregate(options: Array<any>) {
    return this.entity.aggregate(options);
  }
  public findAll(d?: any) {
    if (d) return this.entity.find(d);
    else return this.entity.find();
  }

  public updateOneById(_id: any, doc: any, key = '$set') {
    return this.entity.updateOne({ _id: str2objectId(_id) }, { [key]: doc });
  }
  public async updateOne(
    filter: any,
    update: any,
    options?: any | null,
  ): Promise<QueryWithHelpers<UpdateWriteOpResult, any>> {
    return await this.entity.updateOne(filter, update, options);
  }
  public async updateAndFindOne(filter: any, update: any): Promise<any> {
    const up = await this.entity.updateOne(filter, update);
    if (up.acknowledged) return this.entity.findOne(filter);
    return null;
  }
  public async updateMany(
    filter: any,
    update: any,
    options?: any | null,
  ): Promise<QueryWithHelpers<UpdateWriteOpResult, any>> {
    return await this.entity.updateMany(filter, update, options);
  }
  public async deleteById(_id: any): Promise<any> {
    return await this.entity.deleteOne({ _id: str2objectId(_id) });
  }
  public async deleteMany(data: any): Promise<T | any> {
    return (await this.entity.deleteMany(data)) as any;
  }
  public deleteOne(data: any): any {
    return this.entity.deleteOne(data);
  }
}
