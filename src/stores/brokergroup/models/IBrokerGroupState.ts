import BrokerGroupModel from './BrokerGroupModel';

export default interface IBrokerGroupState {
  readonly data: BrokerGroupModel[];
  readonly error: boolean;
  readonly refreshPage: boolean;
}
