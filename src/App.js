import React, { useEffect, useState } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import CollectionsIcon from '@material-ui/icons/Collections';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Route } from 'react-router-dom';

import { buildProvider } from './backend';
import { CustomerList, CustomerEdit } from './customer/customers';
import AppLayout from './layout/AppLayout';
import { SegmentList } from './customer/segments';
import { ProductList, ProductCreate, ProductEdit } from './product/products';
import { CategoryList } from './product/categories';

const App = () => {
    const [dataProvider, setDataProvider] = useState(null);

    useEffect(() => {
        const provider = buildProvider();
        setDataProvider(() => provider.dataProvider);
        return () => {
            provider.cleanup();
        };
    }, []);

    if (!dataProvider) {
        return <div>Loading</div>;
    }
    return (
        <Admin
            appLayout={AppLayout}
            dataProvider={dataProvider}
            customRoutes={[<Route exact path="/segments" component={SegmentList} />]}
        >
            <Resource
                name="products"
                list={ProductList}
                icon={CollectionsIcon}
                create={ProductCreate}
                edit={ProductEdit}
            />
            <Resource name="categories" list={CategoryList} icon={BookmarkIcon} />
            <Resource name="customers" list={CustomerList} icon={UserIcon} edit={CustomerEdit} />
        </Admin>
    );
};
export default App;
