import FakeRest from 'fakerest';
import fetchMock from 'fetch-mock';
import generator from 'data-generator-retail';
import simpleRestProvider from 'ra-data-simple-rest';

const API_URL = process.env.REACT_APP_API_URL;

export const buildProvider = () => {
    const restServer = new FakeRest.FetchServer(API_URL);
    restServer.toggleLogging();
    restServer.init(generator());
    fetchMock.mock(`begin:${API_URL}`, restServer.getHandler());
    return {
        dataProvider: simpleRestProvider(API_URL),
        cleanup: () => {
            fetchMock.reset();
        },
    };
};
