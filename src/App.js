import React, { useEffect, useState } from 'react';
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';

import { buildProvider } from './backend';
import { CustomerList } from './customers';

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
        <Admin dataProvider={dataProvider}>
            <Resource name="customers" list={CustomerList} icon={UserIcon} />
        </Admin>
    );
};
export default App;
