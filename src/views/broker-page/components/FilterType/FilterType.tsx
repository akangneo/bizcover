import React, { useCallback, useState } from 'react';
import { Input, Button, Grid, GridColumn } from 'semantic-ui-react';
import styles from './InputSearch.module.scss';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import IStore from 'models/IStore';
import * as BrokerActions from 'stores/broker/BrokerActions';


interface IProps {
  
}

export const FilterType: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();

  const onClickButton = (event: any, data: any) => {
    console.log('data',data)
    if(data.children === 'All')
    {
        dispatch(BrokerActions.requestBroker());
    }else{
        dispatch(BrokerActions.requestBrokerByType(data.children));
    }

  };
  
  return (
    <Grid  >
        <Grid.Row centered>
        <Button.Group color='blue'>
            <Button onClick={onClickButton}>All</Button>
            <Button onClick={onClickButton}>Active</Button>
            <Button onClick={onClickButton}>Dormant</Button>
            <Button onClick={onClickButton}>New</Button>
        </Button.Group>
        </Grid.Row>  
    </Grid>
  );
};

export default FilterType;
