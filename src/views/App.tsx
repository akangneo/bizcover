import React, { Suspense, lazy, Fragment } from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Container } from 'semantic-ui-react';
import IAction from '../models/IAction';
import RouteEnum from '../constants/RouteEnum';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import Toasts from './components/toasts/Toasts';
import ModalContainers from './components/modals/ModalContainers';
import NavBar from './components/nav-bar/NavBar';

const NotFoundPage = lazy(() => import('./not-found-page/NotFoundPage'));
const BrokerPage = lazy(() => import('./broker-page/BrokerPage'));

interface RouteParams {
  id: string;
}

interface IProps {
  readonly history: History;
  readonly dispatch: Dispatch<IAction<any>>;
}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => (
  <ConnectedRouter history={props.history}>
    <Suspense fallback={<LoadingIndicator isActive />}>
      <ModalContainers isChild={false} />
      <NavBar history={props.history} />
        <Container style={{ marginTop: '7em' }}>
          <Switch>
            <Route exact path={RouteEnum.Home} component={BrokerPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      <Toasts />
    </Suspense>
  </ConnectedRouter>
);

export default App;
