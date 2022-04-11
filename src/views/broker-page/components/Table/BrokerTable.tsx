import React from 'react';
import { Table } from 'semantic-ui-react';
import styles from './BrokerTable.module.scss';
import IBrokerTableRow from 'selectors/broker/models/IBrokerTableRow';
import IBrokerTable from 'selectors/broker/models/IBrokerTable';
import BrokerTableRow from './table-row/BrokerTableRow';
interface IProps {
  readonly tableData: IBrokerTable;
}

const BrokerTable: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { tableData } = props;
  return (
    <Table celled>
      <Table.Header className={styles.BrokerTable}>
        <Table.Row>
      
          <Table.HeaderCell>Group Nmae</Table.HeaderCell>
          <Table.HeaderCell>Brokerage Name</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Region</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableData.rows.length === 0 && (
          <Table.Row>
            <Table.Cell colSpan={11} textAlign="center" className={styles.nodata}>
              No data
            </Table.Cell>
          </Table.Row>
        )}
        {tableData.rows.map((model: IBrokerTableRow) => (
          <BrokerTableRow key={model.id} rowData={model} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default BrokerTable;
