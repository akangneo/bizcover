import * as BrokerEffects from './BrokerEffects';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import * as ActionUtility from '../../utilities/ActionUtility';
import { ReduxDispatch } from '../../models/ReduxProps';
import IStore from '../../models/IStore';
import BrokerModel from './models/BrokerModel';
type ActionUnion = undefined | HttpErrorResponseModel | BrokerModel[] | BrokerModel ;

export const REQUEST_BROKER: string = 'BrokerActions.REQUEST_BROKER';
export const REQUEST_BROKER_FINISHED: string = 'BrokerActions.REQUEST_BROKER_FINISHED';

export const requestBroker = (): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerModel[]>(dispatch, REQUEST_BROKER, BrokerEffects.requestBroker);
  };
};

export const REQUEST_BROKER_BY_ID: string = 'BrokerActions.REQUEST_BROKER_BY_ID';
export const REQUEST_BROKER_BY_ID_FINISHED: string = 'BrokerActions.REQUEST_BROKER_BY_ID_FINISHED';

export const requestBrokerById = (id: number): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerModel[]>(dispatch, REQUEST_BROKER_BY_ID, BrokerEffects.requestBrokerById, id);
  };
};

export const REQUEST_BROKER_BY_REGION: string = 'BrokerActions.REQUEST_BROKER_BY_REGION';
export const REQUEST_BROKER_BY_REGION_FINISHED: string = 'BrokerActions.REQUEST_BROKER_BY_REGION_FINISHED';

export const requestBrokerByRegion = (region: string): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerModel[]>(dispatch, REQUEST_BROKER_BY_REGION, BrokerEffects.requestBrokerageByRegion, region);
  };
};


export const REQUEST_SEARCH_BROKER: string = 'BrokerActions.REQUEST_SEARCH_BROKER';
export const REQUEST_SEARCH_BROKER_FINISHED: string = 'BrokerActions.REQUEST_SEARCH_BROKER_FINISHED';

export const requestSearchBrokerage = (brokerage:string): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerModel[]>(dispatch, REQUEST_BROKER, BrokerEffects.requestSearchBrokerage, brokerage);
  };
};

export const REQUEST_BROKER_BY_TYPE: string = 'BrokerActions.REQUEST_BROKER_BY_TYPE';
export const REQUEST_BROKER_BY_TYPE_FINISHED: string = 'BrokerActions.REQUEST_BROKER_BY_TYPE_FINISHED';

export const requestBrokerByType = (type: string): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerModel[]>(dispatch, REQUEST_BROKER, BrokerEffects.requestBrokerageByType, type);
  };
};

export const REQUEST_POST_BROKER: string = 'BrokerActions.REQUEST_POST_BROKER';
export const REQUEST_POST_BROKER_FINISHED: string = 'BrokerActions.REQUEST_POST_BROKER_FINISHED';

export const postBroker = (data: BrokerModel): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerModel>(
      dispatch,
      REQUEST_POST_BROKER,
      BrokerEffects.postBroker,
      data
    );
  };
};


export const REQUEST_PUT_BROKER: string = 'BrokerActions.REQUEST_PUT_BROKER';
export const REQUEST_PUT_BROKER_FINISHED: string = 'BrokerActions.REQUEST_PUT_BROKER_FINISHED';

export const putBroker = (data: BrokerModel): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerModel>(
      dispatch,
      REQUEST_PUT_BROKER,
      BrokerEffects.putBroker,
      data
    );
  };
};

export const REQUEST_DELETE_BROKER: string = 'BrokerActions.REQUEST_DELETE_BROKER';
export const REQUEST_DELETE_BROKER_FINISHED: string = 'BrokerActions.REQUEST_DELETE_BROKER_FINISHED';

export const deleteBroker = (data: number): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerModel>(
      dispatch,
      REQUEST_DELETE_BROKER,
      BrokerEffects.delBroker,
      data
    );
  };
};