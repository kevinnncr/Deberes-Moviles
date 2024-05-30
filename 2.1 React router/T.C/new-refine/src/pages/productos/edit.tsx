import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ProductsEdit = () => {
    const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

    const productsData = queryResult?.data?.data;

    const { selectProps: productsSelectProps } = useSelect({
        resource: "products",
        defaultValue: productsData?.products?.id,
        queryOptions: {
            enabled: !!productsData?.products?.id,
        },
    });

    return (
        <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Title"}
                    name={["title"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Content"}
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label={"Products"}
                    name={["products", "id"]}
                    initialValue={formProps?.initialValues?.products?.id}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...productsSelectProps} />
                </Form.Item>
                <Form.Item
                    label={"Status"}
                    name={["status"]}
                    initialValue={"draft"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        defaultValue={"draft"}
                        options={[
                            { value: "draft", label: "Draft" },
                            { value: "published", label: "Published" },
                            { value: "rejected", label: "Rejected" },
                        ]}
                        style={{ width: 120 }}
                    />
                </Form.Item>
            </Form>
        </Edit>
    );
};
