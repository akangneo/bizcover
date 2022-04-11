import environment from 'environment';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import * as HttpUtility from '../../utilities/HttpUtility';
import { AxiosResponse } from 'axios';
import * as EffectUtility from '../../utilities/EffectUtility';
import BrokerModel from './models/BrokerModel';


export const requestBroker = async (): Promise<BrokerModel[] | HttpErrorResponseModel> => {
  const controllerName = `broker`;
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.getToModel<BrokerModel[]>(BrokerModel, endpoint);
};

export const requestBrokerById = async (id: number): Promise<BrokerModel[] | HttpErrorResponseModel> => {
  const controllerName = `broker?id=${id}`;
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.getToModel<BrokerModel[]>(BrokerModel, endpoint);
};

export const requestSearchBrokerage = async (filter:string): Promise<BrokerModel[] | HttpErrorResponseModel> => {
  const controllerName = `broker?q=${filter}`;
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.getToModel<BrokerModel[]>(BrokerModel, endpoint);
};

export const requestBrokerageByType = async (type:string): Promise<BrokerModel[] | HttpErrorResponseModel> => {
  const controllerName = `broker?type=${type}`;
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.getToModel<BrokerModel[]>(BrokerModel, endpoint);
};

export const requestBrokerageByRegion = async (region:string): Promise<BrokerModel[] | HttpErrorResponseModel> => {
  const controllerName = `broker?region=${region}`;
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.getToModel<BrokerModel[]>(BrokerModel, endpoint);
};


export const postBroker = async (data: BrokerModel): Promise<BrokerModel | HttpErrorResponseModel> => {
  const controllerName = 'broker';
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.postToModel<BrokerModel>(BrokerModel, endpoint, data);
};

export const putBroker = async (data: BrokerModel): Promise<BrokerModel | HttpErrorResponseModel> => {
  const controllerName = `broker/${data.id}`;
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.putToModel<BrokerModel>(BrokerModel, endpoint, data);
};

export const delBroker = async (
  id: number
): Promise<BrokerModel | HttpErrorResponseModel> => {
  const controllerName = `broker${id}`;
  const endpoint: string = environment.api.bizCover.replace(':controller', controllerName);
  return EffectUtility.delToModel<BrokerModel>(BrokerModel, endpoint);
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
