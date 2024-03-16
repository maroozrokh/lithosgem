
export interface IFaq{
    title: string;
    content: string;
    metaDescription: string;
    qa?:Array<IQA>
    categories?:string;
    from:string;
    sendFromDate?:Date;
  }

  export interface IQA{
    _ID?:any;
    question?:string;
    answer?:string;
  }

 
  
  