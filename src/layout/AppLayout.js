import React from 'react';
import { Layout } from 'react-admin';
import AppMenu from './AppMenu';

const AppLayout = props => <Layout {...props} menu={AppMenu} />;

export default AppLayout;
