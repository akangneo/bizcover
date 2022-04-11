import { createSelector, Selector } from 'reselect';
import IStore from '../../models/IStore';
import IOptionsDataString from './models/IOptionsDataString';
import BrokerGroupModel from 'stores/brokergroup/models/BrokerGroupModel';

const _selectBrokerGroupOptions= (models: BrokerGroupModel[]): IOptionsDataString[] => {
  return models.map(
    (model: BrokerGroupModel): IOptionsDataString => ({
      text: model.name,
      value: model.name,
    })
  );
};

export const selectBrokerGroupOptions: Selector<IStore, IOptionsDataString[]> = createSelector((state: IStore) => state.brokergroups.data, _selectBrokerGroupOptions);
