import supertestRequest from 'supertest';

import app from './app';

const request = supertestRequest(app);

describe('/ endpoint', () => {
  it('should return a 200 response with a "Hello World" message', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      message: 'Hello World',
    });
  });
});
