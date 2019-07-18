import React, { useEffect, useState } from 'react';
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import { Route } from 'react-router-dom';

import { buildProvider } from './backend';
import { CustomerList, CustomerEdit } from './customer/customers';
import AppLayout from './layout/AppLayout';
import { SegmentCard } from './customer/segments';

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
            customRoutes={[<Route exact path="/segments" component={SegmentCard} />]}
        >
            <Resource name="customers" list={CustomerList} icon={UserIcon} edit={CustomerEdit} />
        </Admin>
    );
};
export default App;
