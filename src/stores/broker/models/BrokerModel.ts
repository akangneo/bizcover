import { BaseModel, ConversionTypeEnum, IConversionOption } from 'sjs-base-model';


 export default class BrokerModel extends BaseModel {
    public id:number = 0;
    public brokergroup:string = '';
    public brokername:string = '';
    public type:string = '';
    public region:string = '';

  constructor(data: Partial<BrokerModel>){
    super();
    this.update(data)
  }

  public update(data: Partial<BrokerModel>): void {
    const conversionOptions: IConversionOption = {
      id:ConversionTypeEnum.Number,
      brokergroup:ConversionTypeEnum.String,
      brokername:ConversionTypeEnum.String,
      type:ConversionTypeEnum.String,
      region:ConversionTypeEnum.String,
    };

    super.update(data, conversionOptions);
}
}
  


