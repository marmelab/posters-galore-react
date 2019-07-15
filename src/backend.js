import FakeRest from 'fakerest';
import fetchMock from 'fetch-mock';
import generator from 'data-generator-retail';

import { API_URL } from './constants';

export const initBackend = () => {
    const restServer = new FakeRest.FetchServer(API_URL);
    restServer.toggleLogging();
    restServer.init(generator());
    fetchMock.mock(`begin:${API_URL}`, restServer.getHandler());
}
