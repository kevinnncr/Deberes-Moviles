import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const ClientShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />
      <Title level={5}>Nombre</Title>
      <TextField value={record?.name} />
      <Title level={5}>Correo electrónico</Title>
      <TextField value={record?.email} />
      <Title level={5}>Teléfono</Title>
      <TextField value={record?.phone} />
      <Title level={5}>Dirección</Title>
      <TextField value={record?.address} />
    </Show>
  );
};