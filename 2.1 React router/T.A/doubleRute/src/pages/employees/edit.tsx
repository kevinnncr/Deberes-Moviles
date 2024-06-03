import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const EmployeeEdit = () => {
  const { formProps, saveButtonProps, formLoading } = useForm({});


  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Nombre"}
          name={["firstName"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Apellido"}
          name={["lastName"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Correo electrónico"}
          name={["email"]}
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Rol"}
          name={["role"]}
          initialValue={"employee"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={"employee"}
            options={[
              { value: "employee", label: "Empleado" },
              { value: "manager", label: "Gerente" },
              { value: "admin", label: "Administrador" },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};