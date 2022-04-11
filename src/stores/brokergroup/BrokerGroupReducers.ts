
import * as BrokerGroupEffects from './BrokerGroupEffects';
import IAction from '../../models/IAction';
import baseReducer from '../../utilities/BaseReducer';
import { Reducer } from 'redux';
import IBrokerGroupState from './models/IBrokerGroupState';
import * as BrokerGroupActions from './BrokerGroupActions'
import BrokerGroupModel from './models/BrokerGroupModel';

export const initialState: IBrokerGroupState = {
  data: [],
  error: false,
  refreshPage: false,
};

const brokerReducers: Reducer = baseReducer(initialState, {
  [BrokerGroupActions.REQUEST_BROKER_GROUP_FINISHED](state: IBrokerGroupState, action: IAction<BrokerGroupModel[]>): IBrokerGroupState {
    return {
      ...state,
      data: action.payload!,
      error: action.error!,
      refreshPage: false,
    };
  },
});

export default brokerReducers;
