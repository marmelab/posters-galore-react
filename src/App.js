import React from 'react';
import { Admin } from 'react-admin';
import generator from 'data-generator-retail';

const dataProvider = generator();
const App = () => <Admin dataProvider={dataProvider} />;

export default App;
