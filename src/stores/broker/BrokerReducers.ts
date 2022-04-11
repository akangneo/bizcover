
import * as BrokerEffects from './BrokerEffects';
import IAction from '../../models/IAction';
import baseReducer from '../../utilities/BaseReducer';
import { Reducer } from 'redux';
import IBrokerState from './models/IBrokerState';
import * as BrokerActions from './BrokerActions'
import BrokerModel from './models/BrokerModel';

export const initialState: IBrokerState = {
  data: [],
  firstData: [],
  error: false,
  refreshPage: false,
};

const brokerReducers: Reducer = baseReducer(initialState, {
  [BrokerActions.REQUEST_BROKER_FINISHED](state: IBrokerState, action: IAction<BrokerModel[]>): IBrokerState {
    return {
      ...state,
      data: action.payload!,
      error: action.error!,
      refreshPage: false,
    };
  },

  [BrokerActions.REQUEST_BROKER_BY_ID_FINISHED](state: IBrokerState, action: IAction<BrokerModel[]>): IBrokerState {
    return {
      ...state,
      firstData: action.payload!,
      error: action.error!,
      refreshPage: false,
    };
  },
  [BrokerActions.REQUEST_SEARCH_BROKER_FINISHED](state: IBrokerState, action: IAction<BrokerModel[]>): IBrokerState {
    return {
      ...state,
      data: action.payload!,
      error: action.error!,
      refreshPage: false,
    };
  },
  [BrokerActions.REQUEST_POST_BROKER_FINISHED](
    state: IBrokerState,
    action: IAction<BrokerModel>
  ): IBrokerState {
    return {
      ...state,
      error: action.error!,
      refreshPage: action.error ? false : true,
    };
  },

  [BrokerActions.REQUEST_PUT_BROKER_FINISHED](
    state: IBrokerState,
    action: IAction<BrokerModel>
  ): IBrokerState {
    return {
      ...state,
      error: action.error!,
      refreshPage: action.error ? false : true,
    };
  },

  [BrokerActions.REQUEST_DELETE_BROKER_FINISHED](
    state: IBrokerState,
    action: IAction<BrokerModel>
  ): IBrokerState {
    return {
      ...state,
      error: action.error!,
      refreshPage: action.error ? false : true,
    };
  },

  [BrokerActions.REQUEST_BROKER_BY_REGION_FINISHED](state: IBrokerState, action: IAction<BrokerModel[]>): IBrokerState {
    return {
      ...state,
      data: action.payload!,
      error: action.error!,
      refreshPage: false,
    };
  },

});

export default brokerReducers;
