import React from 'react';

import {
    List,
    Datagrid,
    TextField,
    TextInput,
    NumberField,
    NumberInput,
    Create,
    TabbedForm,
    FormTab,
    EditButton,
    Edit,
    ImageField,
    ReferenceInput,
    SelectInput,
    ReferenceField,
    ChipField,
    Filter,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const ProductCreate = props => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Image">
                <TextInput source="image" />
                <TextInput source="thumbnail" />
            </FormTab>
            <FormTab label="Details">
                <TextInput source="reference" />
                <NumberInput source="price" />
                <NumberInput source="width" />
                <NumberInput source="height" />
                <ReferenceInput source="category_id" reference="categories" allowEmpty>
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput source="stock" />
            </FormTab>
            <FormTab label="Description">
                <RichTextInput source="description" />
            </FormTab>
        </TabbedForm>
    </Create>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Image">
                <ImageField source="thumbnail" addLabel={false} />
                <TextInput source="image" />
                <TextInput source="thumbnail" />
            </FormTab>
            <FormTab label="Details">
                <TextInput source="reference" />
                <NumberInput source="price" />
                <NumberInput source="width" />
                <NumberInput source="height" />
                <ReferenceInput source="category_id" reference="categories">
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput source="stock" />
            </FormTab>
            <FormTab label="Description">
                <RichTextInput source="description" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

const ProductFilter = props => (
    <Filter {...props}>
        <ReferenceInput reference="categories" source="category_id" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const ProductList = props => (
    <List {...props} filters={<ProductFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="reference" />
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField source="price" />
            <ReferenceField source="category_id" reference="categories">
                <ChipField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);
