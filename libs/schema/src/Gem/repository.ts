import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { BaseRepository } from '../Base/base.repository';
import { Gem, GemDocument } from './model';
import { table } from 'console';
 
@Injectable()
export class GemRepository extends BaseRepository<GemDocument> {

  constructor(
    @InjectModel(Gem.name)
    private model: Model<GemDocument>,
  ) {
    super(model);
  }

  async addGem(payload:any) {
    const gem = new this.model(payload);

    // Generate and assign _id for each group
    if('images' in gem){
       gem.images.forEach((images:any) => {
      images._id = new Types.ObjectId();

    });

    }
    if('mapimages'in gem){
       gem.mapimages.forEach((mapimages:any) => {
      mapimages._id = new Types.ObjectId();
  
     
    });

    gem.boresh.boreshImg.forEach((boreshImg:any)=>{
      boreshImg._id = new Types.ObjectId();
  
    })


    
   



 
    }
   
   



 


    return await gem.save();
  }
}
