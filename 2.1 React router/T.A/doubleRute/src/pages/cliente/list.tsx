import {
  DeleteButton,
  EditButton,
  List,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const ClientList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Nombre" />
        <Table.Column dataIndex="email" title="Correo electrónico" />
        <Table.Column dataIndex="phone" title="Teléfono" />
        <Table.Column dataIndex="address" title="Dirección" />
        <Table.Column
          title="Acciones"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};