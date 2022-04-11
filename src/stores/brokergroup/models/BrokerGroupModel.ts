import { BaseModel } from 'sjs-base-model';

export default class BrokerGroupModel extends BaseModel {
  public readonly id: number = 0;
  public readonly name: string = '';

  constructor(data: Partial<BrokerGroupModel>) {
    super();

    this.update(data);
  }
}
