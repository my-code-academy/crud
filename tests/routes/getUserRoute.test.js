const server = require('../../server');

describe('the /user/id route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/user/1',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
  });
  it('should respond with a string value \'qwe\'', async () => {
    const options = {
      method: 'GET',
      url: '/user/1',
    };
    const response = await server.inject(options);
    console.log(JSON.parse(response.payload));
    expect(typeof response.payload).toEqual(typeof '');
    expect(JSON.parse(response.payload)[0].id).toEqual(1);
  });
});
