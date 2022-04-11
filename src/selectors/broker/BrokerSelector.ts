
import { createSelector, ParametricSelector } from 'reselect';
import IStore from 'models/IStore';
import IBrokerTable from './models/IBrokerTable';
import IBrokerTableRow from './models/IBrokerTableRow';
import { Selector } from 'react-redux';
import BrokerModel from 'stores/broker/models/BrokerModel';

const _selectBrokers = (models: BrokerModel[]): IBrokerTable => {
  return {
    rows: _createTableRows(models),
  };
};

const _createTableRows = (models: BrokerModel[]): IBrokerTableRow[] => {
  return models.map((model: BrokerModel): IBrokerTableRow => _mappingObjectTableRow(model));
};

export const selectBrokers: ParametricSelector<IStore, string[], IBrokerTable> = createSelector(
  (state: IStore) => state.brokers.data!,
  (state: IStore, actionTypes: string[]) => actionTypes,
  _selectBrokers
);

const _mappingObjectTableRow = (model: BrokerModel): IBrokerTableRow => {
  return {
    id: model.id,
    brokergroup: model.brokergroup,
    brokername: model.brokername,
    type: model.type,
    region: model.region
  };
};


export const selectBroker: ParametricSelector<IStore, string[], IBrokerTable> = createSelector(
  (state: IStore) => state.brokers.firstData!,
  (state: IStore, actionTypes: string[]) => actionTypes,
  _selectBrokers
);

