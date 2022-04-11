import { RouterState } from 'connected-react-router';
import IRequestingState from 'stores/requesting/models/IRequestingState';
import IErrorState from 'stores/error/models/IErrorState';
import IToastsState from 'stores/toasts/models/IToastsState';
import IModalFirstLevelState from 'stores/modal/first-level/models/IModalFirstLevelState';
import IModalSecondLevelState from 'stores/modal/second-level/models/IModalSecondLevelState';
import IModalThirdLevelState from 'stores/modal/third-level/models/IModalThirdLevelState';
import IBrokerState from 'stores/broker/models/IBrokerState';
import IBrokerGroupState from 'stores/brokergroup/models/IBrokerGroupState';

export default interface IStore {
  readonly error: IErrorState;
  readonly requesting: IRequestingState;
  readonly router: RouterState;
  readonly toasts: IToastsState;
  readonly modalFirstLevel: IModalFirstLevelState;
  readonly modalSecondLevel: IModalSecondLevelState;
  readonly modalThirdLevel: IModalThirdLevelState;
  readonly brokers: IBrokerState,
  readonly brokergroups: IBrokerGroupState,
}
