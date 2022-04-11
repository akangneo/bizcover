import * as BrokerGroupEffects from './BrokerGroupEffects';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import * as ActionUtility from '../../utilities/ActionUtility';
import { ReduxDispatch } from '../../models/ReduxProps';
import IStore from '../../models/IStore';
import BrokerGroupModel from './models/BrokerGroupModel';
type ActionUnion = undefined | HttpErrorResponseModel | BrokerGroupModel[] | BrokerGroupModel ;

export const REQUEST_BROKER_GROUP: string = 'BrokerActions.REQUEST_BROKER_GROUP';
export const REQUEST_BROKER_GROUP_FINISHED: string = 'BrokerActions.REQUEST_BROKER_GROUP_FINISHED';

export const requestBrokerGroup = (): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    await ActionUtility.createThunkEffect<BrokerGroupModel[]>(dispatch, REQUEST_BROKER_GROUP, BrokerGroupEffects.requestBrokerGroup);
  };
};




