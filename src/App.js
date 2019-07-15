import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider'
import UserIcon from '@material-ui/icons/Group';

import { initBackend } from './backend';
import { CustomerList } from './customers'

initBackend();

const App = () =>
  <Admin dataProvider={dataProvider}>
    <Resource name="customers" list={CustomerList} icon={UserIcon} />
  </Admin>
  ;

export default App;
