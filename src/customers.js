import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    DateField,
    Filter,
    TextInput,
    DateInput,
} from 'react-admin';

const DEFAULT_SORT = { field: 'last_seen', order: 'DESC' };

const CustomerFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <DateInput source="last_seen_gte" label="Visited Since" />
        <DateInput source="last_seen_lte" label="Visited To" />
    </Filter>
);

export const CustomerList = props => (
    <List {...props} filters={<CustomerFilter />} sort={DEFAULT_SORT}>
        <Datagrid>
            <TextField source="first_name" />
            <TextField source="last_name" />
            <DateField source="first_seen" />
            <DateField source="last_seen" />
            <DateField source="latest_purchase" />
            <BooleanField source="has_newsletter" />
        </Datagrid>
    </List>
);
