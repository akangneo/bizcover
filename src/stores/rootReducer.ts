import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import IStore from '../models/IStore';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import toastsReducer from './toasts/ToastsReducer';
import modalFirstLevelReducer from './modal/first-level/ModalFirstLevelReducer';
import modalSecondLevelReducer from './modal/second-level/ModalSecondLevelReducer';
import modalThirdLevelReducer from './modal/third-level/ModalThirdLevelReducer';
import brokerReducers from './broker/BrokerReducers';
import brokerGroupReducers from './brokergroup/BrokerGroupReducers';
const rootReducer = (history: History): Reducer<IStore> => {
  const reducerMap: ReducersMapObject<IStore> = {

    error: errorReducer,
    requesting: requestingReducer,
    router: connectRouter(history) as any,
    toasts: toastsReducer,
    modalFirstLevel: modalFirstLevelReducer,
    modalSecondLevel: modalSecondLevelReducer,
    modalThirdLevel: modalThirdLevelReducer,
    brokers: brokerReducers,
    brokergroups: brokerGroupReducers
  };

  return combineReducers(reducerMap);
};

export default rootReducer;
