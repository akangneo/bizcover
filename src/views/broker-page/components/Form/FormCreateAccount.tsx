import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Form, Grid, Card, Divider, Segment, Header, Icon, Dropdown } from 'semantic-ui-react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Button, SelectInput, TextInput } from 'views/components/UI';
import IStore from 'models/IStore';
import * as ModalFirstLevelActions from 'stores/modal/first-level/ModalFirstLevelActions'

import classes from './FormCreateAccount.module.scss';
import BrokerModel from 'stores/broker/models/BrokerModel';
import { brokerTypeOptions } from './../../../../constants/brokerTypeOptions';
import { regionOptions } from 'constants/regionOptions';
import * as BrokerGroupActions from 'stores/brokergroup/BrokerGroupActions';
import { selectBrokerGroupOptions } from './../../../../selectors/select-options/BrokerGroupSelector';
import * as BrokerActions from 'stores/broker/BrokerActions';
import { selectBroker } from 'selectors/broker/BrokerSelector';


interface IProps {
  id: number;
  rowData: any;
}
const FormCreateAccount: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();
  const bRefreshPage: boolean = useSelector((state: IStore) => state.brokers.refreshPage);
  let brokerStore: BrokerModel = new BrokerModel(props.rowData);

  useEffect(() => {
    dispatch(BrokerGroupActions.requestBrokerGroup());
  }, [dispatch,props.id]);

  const onClose = () => {
    dispatch(ModalFirstLevelActions.CLOSE());
  };
   
  const onSubmitHandler = (values: any) => {
    const newItems = new BrokerModel(values);
    if(props.id === 0)
    {
      dispatch(BrokerActions.postBroker(newItems));
    }else{
      dispatch(BrokerActions.putBroker(newItems));
    }
  };

  const brokerGroupOptions: any = useSelector((state: IStore) => selectBrokerGroupOptions(state));

  /* const validate = combineValidators({
    qty: isRequired('Quantity'),
    brandID: isRequired('Brand'),
    subBrandID: isRequired('Sub Brand'),
    warranty: isRequired('Warranty'),
    // productDesc: (val) => (funnelProductService?.totalItemProduct || lengthProduct.length ? (val ? false : true) : false),
  }); */

  if (bRefreshPage) {
    dispatch(BrokerActions.requestBroker());
    onClose();
  }


  //const brokerStore = useSelector((state: IStore) => selectBroker(state,[BrokerActions.REQUEST_BROKER_BY_ID]));
  //console.log('brokers', brokerStore.rows[0])
  return (
    <FinalForm
      //validate={validate}
      onSubmit={(values: any) => onSubmitHandler(values)}
      initialValues={props.id !== 0 && brokerStore}
      render={({ handleSubmit, invalid, pristine }) => (
        <Form onSubmit={handleSubmit}>
          <Card.Header>{props.id === 0 ? 'Add' : 'Update'} Account</Card.Header>
          <Divider></Divider>
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Field
                  name="brokergroup"
                  labelName="Broker Group"
                  component={SelectInput}
                  placeholder="Broker Group"
                  options={brokerGroupOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Field name="brokername" component={TextInput} placeholder="Broker Name" labelName="Broker Name" />
              </Grid.Column>
              <Grid.Column>
              <Field
                  name="region"
                  labelName="Region"
                  component={SelectInput}
                  placeholder="Region"
                  options={regionOptions}
                />
              </Grid.Column>
              <Grid.Column>
              <Field
                  name="type"
                  labelName="Type"
                  component={SelectInput}
                  placeholder="Type"
                  options={brokerTypeOptions}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>{' '}
          <br />
          <Button
            color="blue"
            floated="right"
            content="Submit"
            disabled={
              // pristine ||
              invalid
            }
          />
          <Button type="button" floated="right" content="Cancel" onClick={onClose} />
        </Form>
      )}
    />
  );
};

export default FormCreateAccount;
