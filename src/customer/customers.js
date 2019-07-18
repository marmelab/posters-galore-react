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
    EditButton,
    Edit,
    TabbedForm,
    FormTab,
} from 'react-admin';
import { SegmentsField, SegmentSelectArrayInput } from './segments';

const DEFAULT_SORT = { field: 'last_seen', order: 'DESC' };

const CustomerFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <DateInput source="last_seen_gte" label="Visited Since" />
        <DateInput source="last_seen_lte" label="Visited To" />
        <SegmentSelectArrayInput source="groups" />
    </Filter>
);

export const CustomerEdit = props => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Identity">
                <TextInput source="first_name" />
                <TextInput source="last_name" />
                <TextInput source="email" />
                <DateInput source="birthday" />
            </FormTab>
            <FormTab label="Address">
                <TextInput source="address" />
                <TextInput source="zipcode" />
                <TextInput source="city" />
            </FormTab>
            <FormTab label="Stats">
                <SegmentSelectArrayInput source="groups" />
            </FormTab>
        </TabbedForm>
    </Edit>
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
            <SegmentsField source="groups" label="Segments" />
            <EditButton />
        </Datagrid>
    </List>
);
