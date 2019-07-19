import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    DateInput,
    TextInput,
    ReferenceInput,
    BooleanInput,
    SelectInput,
} from 'react-admin';

import CustomerLabelField from '../customer/CustomerLabelField';

export const CommandEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DateInput source="date" />
            <ReferenceInput source="customer_id" reference="customers">
                <SelectInput optionText={<CustomerLabelField />} />
            </ReferenceInput>
            <TextInput source="status" />
            <BooleanInput source="returned" />
        </SimpleForm>
    </Edit>
);

export const CommandList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <DateField source="date" />
            <TextField source="reference" />
            <ReferenceField source="customer_id" reference="customers">
                <CustomerLabelField />
            </ReferenceField>
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);
