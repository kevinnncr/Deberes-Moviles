import {
  DeleteButton,
  EditButton,
  List,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const EmployeeList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="firstName" title={"Nombre"} />
        <Table.Column dataIndex="lastName" title={"Apellido"} />
        <Table.Column dataIndex="email" title={"Correo electrónico"} />
        <Table.Column dataIndex="role" title={"Rol"} />
        <Table.Column
          title={"Acciones"}
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