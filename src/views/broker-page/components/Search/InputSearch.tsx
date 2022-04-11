import React, { useCallback, useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import styles from './InputSearch.module.scss';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import IStore from 'models/IStore';
import * as BrokerActions from 'stores/broker/BrokerActions';


interface IProps {
  
}

export const InputSearch: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();

  const onChangeSearch = (event: any, data: any) => {
    console.log('data',data)
    dispatch(BrokerActions.requestSearchBrokerage(data.value));
  };
  
  return (
    <Input
      className={styles.Rounded }
      icon="search"
      iconPosition="left"
      placeholder="Search Brokerage"
      onChange={onChangeSearch}
    />
  );
};

export default InputSearch;
