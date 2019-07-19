import React from 'react';

import { List, Datagrid, TextField } from 'react-admin';
import { Button } from '@material-ui/core';

export const CategoryList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <ProductLink />
        </Datagrid>
    </List>
);

const ProductLink = ({ record }) => (
    <Button
        href={`#/products?filter=%7B"category_id"%3A${record.id}%7D&order=DESC&page=1&perPage=25}`}
    >
        Products
    </Button>
);
