import {
    DateField,
    MarkdownField,
    NumberField,
    Show,
    TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const ProductsShow = () => {
    const { queryResult } = useShow({});
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: productsData, isLoading: productsIsLoading } = useOne({
        resource: "categories",
        id: record?.products?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{"Title"}</Title>
            <TextField value={record?.name} />
            <Title level={5}>{"Content"}</Title>
            <MarkdownField value={record?.description} />
            <Title level={5}>{"Category"}</Title>
            <TextField
                value={
                    productsIsLoading ? <>Loading...</> : <>{productsData?.data?.name}</>
                }
            />
            <Title level={5}>{"Status"}</Title>
            <TextField value={record?.status} />
            <Title level={5}>{"CreatedAt"}</Title>
            <DateField value={record?.createdAt} />
        </Show>
    );
};
