import React from 'react';
import { List, Datagrid, TextField, BooleanField, DateField } from 'react-admin';

export const CustomerList = props => (
    <List {...props} sort={{ field: 'last_seen', order: 'DESC' }}>
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
