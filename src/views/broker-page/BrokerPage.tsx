import styles from './BrokerPage.module.scss';

import React, { Fragment, useEffect } from 'react';
import LoadingIndicator from 'views/components/loading-indicator/LoadingIndicator';
import { Card,  Grid,  Input,  Segment } from 'semantic-ui-react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import IStore from 'models/IStore';
import {Button, SearchInput} from '../components/UI'
import { selectRequesting } from 'selectors/requesting/RequestingSelector';
import InputSearch from './components/Search/InputSearch';
import BrokerTable from './components/Table/BrokerTable';
import IBrokerTable from 'selectors/broker/models/IBrokerTable';
import { selectBrokers } from 'selectors/broker/BrokerSelector';
import * as BrokerActions from 'stores/broker/BrokerActions';
import FilterType from './components/FilterType/FilterType';
import FormCreateAccount from './components/Form/FormCreateAccount';
import ModalSizeEnum from 'constants/ModalSizeEnum';
import * as ModalFirstLevelActions from 'stores/modal/first-level/ModalFirstLevelActions';

interface IProps {}

const BrokerPage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();
  const isRequesting: boolean = useSelector((state: IStore) => selectRequesting(state, []));
  const brokerTables: IBrokerTable = useSelector((state: IStore) => selectBrokers(state, [BrokerActions.REQUEST_BROKER, BrokerActions.REQUEST_SEARCH_BROKER]));

  useEffect(() => {
    dispatch(BrokerActions.requestBroker());
  }, [dispatch]);
  
  const onAddAccount = () => {
    dispatch(
      ModalFirstLevelActions.OPEN(
        <FormCreateAccount id={0} rowData={{}} />,
        ModalSizeEnum.Small
      )
    );
  }

  return (
  <Fragment>
      <LoadingIndicator isActive={isRequesting}>
      <Card centered raised className={styles.Card}>
          <Card.Content>
            <Card.Header>
                BizFlashCover Broker
            </Card.Header>
          </Card.Content>
          <Card.Content> 
          <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                  <Button color="primary" flex="1" onClick={onAddAccount}>Add Account</Button>
                </Grid.Column>
                <Grid.Column width={8} verticalAlign="middle">
                    <FilterType />
                </Grid.Column>
                <Grid.Column>
                   <InputSearch />
                </Grid.Column>
              </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                  <BrokerTable tableData={brokerTables} />
            </Grid.Column>
            </Grid.Row>
            
            </Grid>
          </Card.Content>
        </Card>
      </LoadingIndicator>
    </Fragment>
  )
};

export default BrokerPage;
