import environment from 'environment';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import * as HttpUtility from '../../utilities/HttpUtility';
import { AxiosResponse } from 'axios';
import * as EffectUtility from '../../utilities/EffectUtility';
import BrokerGroupModel from './models/BrokerGroupModel';


export const requestBrokerGroup = async (): Promise<BrokerGroupModel[] | HttpErrorResponseModel> => {
  const controllerName = `brokergroup`;
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.getToModel<BrokerGroupModel[]>(BrokerGroupModel, endpoint);
};



/**
 * This is only to trigger an error api response so we can use it for an example in the AboutPage
 */
export const requestError = async (): Promise<any | HttpErrorResponseModel> => {
  const endpoint: string = environment.api.bizCover;
  const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.get(endpoint);

  if (response instanceof HttpErrorResponseModel) {
    return response;
  }

  return response.data;
};
