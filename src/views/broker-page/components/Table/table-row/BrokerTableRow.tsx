import React, { Fragment, useState } from 'react';
import { Table, Dropdown, Confirm } from 'semantic-ui-react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as ModalFirstLevelActions from 'stores/modal/first-level/ModalFirstLevelActions';
import ModalSizeEnum from 'constants/ModalSizeEnum';
import IStore from 'models/IStore';
import IBrokerTableRow from 'selectors/broker/models/IBrokerTableRow';
import { Button } from 'views/components/UI';
import FormCreateAccount from '../../Form/FormCreateAccount';
import * as BrokerActions from 'stores/broker/BrokerActions';

interface IProps {
  readonly rowData: IBrokerTableRow;
}

const BrokerTableRow: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();
  const { rowData } = props;
  const [openConfirm, setOpenConfirm] = useState(false);
  
  const onEditData = () => {
    dispatch(
      ModalFirstLevelActions.OPEN(
        <FormCreateAccount id={rowData.id} rowData={rowData} />,
        ModalSizeEnum.Small
      )
    );
  }

  
  const handleCancel = () => setOpenConfirm(false);
  const showConfirm = () => setOpenConfirm(true);
  const handleDelete = () => {
    dispatch(BrokerActions.deleteBroker(rowData.id)).then(() => {
      dispatch(BrokerActions.requestBroker())
      handleCancel();
    });
  };
 

  return (
    <Fragment>
      <Confirm
        open={openConfirm}
        onCancel={handleCancel}
        onConfirm={handleDelete}
        centered
        content={`Are you sure want to delete ${rowData.brokername} ?`}
        size="mini"
      />
      <Table.Row key={rowData.id}>
        <Table.Cell>{rowData.brokergroup}</Table.Cell>
        <Table.Cell>{rowData.brokername}</Table.Cell>
        <Table.Cell>{rowData.type}</Table.Cell>
        <Table.Cell>{rowData.region}</Table.Cell>
        <Table.Cell width="2">
          <Button icon="edit" onClick={onEditData} />
          <Button icon="delete" onClick={showConfirm} />
        </Table.Cell>
      </Table.Row>
    </Fragment>
   
  );
};

export default BrokerTableRow;
