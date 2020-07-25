import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render } from '@testing-library/react';

import Axios from 'axios';
import Home from '../../pages/Home';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Home page', () => {
  it('should render home page', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('home-page-container')).toBeTruthy();
  });

  it('should be able to load tools', () => {
    const responseData = {
      tools: [
        {
          id: 1,
          title: 'Notion',
          link: 'https://notion.so',
          description:
            'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
          tags: ['organization', 'planning'],
        },
        {
          id: 2,
          title: 'json-server',
          link: 'https://github.com/typicode/json-server',
          description:
            'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
          tags: ['api', 'json'],
        },
      ],
    };

    apiMock.onGet('/tools').reply(200, responseData);

    render(<Home />);

    jest.spyOn(Axios, 'get').mockResolvedValueOnce(responseData);
  });
});
