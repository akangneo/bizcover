import React, { useEffect, useState } from 'react';
import { Menu, Container, Dropdown, Image, Icon, Select } from 'semantic-ui-react';
import './NavBar.scss';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import IStore from 'models/IStore';
import { Dispatch } from 'redux';

import { Redirect } from 'react-router-dom';
import RouteEnum from 'constants/RouteEnum';
import { History } from 'history';
import { regionOptions } from './../../../constants/regionOptions';
import * as BrokerActions from 'stores/broker/BrokerActions';

interface IProps {
  history: History;
}
export const NavBar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();
  const { history } = props;

  useEffect(() => {

  }, [dispatch]);

  

  const onLogout = () => {
    console.log('logout')
  };

  const onChangeRegion = (event:any, data:any) =>{
    console.log('region',data)
    if(data.value === ''){
      dispatch(BrokerActions.requestBroker());
    }else{
      dispatch(BrokerActions.requestBrokerByRegion(data.value));
    }
    
  }



  return (
    <Menu fixed="top" inverted>
        <Menu.Item className="NoBorder UserNameNav pl-0" position="left">
              Home
        </Menu.Item>
        <Menu.Item className="NoBorder UserNameNav" >
          <Dropdown clearable options={regionOptions} selection placeholder="Region" onChange={onChangeRegion} />

        </Menu.Item>     
        <Menu.Item className="MainTitleText AvatarMar" position="right"> 
          <Dropdown className="CuzUsrDropdown" icon="ellipsis vertical" pointing="top left" text="Welcome, Friend">
            <Dropdown.Menu>
              <Dropdown.Item text="Logout" icon="power" onClick={onLogout} />
            </Dropdown.Menu>
          </Dropdown>
          <Image className="AvatarPosition" avatar spaced="right" src={'/assets/user.png'} />
        </Menu.Item>
    </Menu>
  );
};

export default NavBar;
