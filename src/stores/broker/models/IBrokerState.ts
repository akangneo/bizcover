import BrokerModel from './BrokerModel';

export default interface IBrokerState {
  readonly data: BrokerModel[];
  readonly firstData: BrokerModel[];
  readonly error: boolean;
  readonly refreshPage: boolean;
}
