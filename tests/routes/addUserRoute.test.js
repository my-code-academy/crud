
const request = require('request');

test('output should be added User if user doesnt exist', (done) => {
  const callback = (data) => {
    expect(data).toEqual('Added User');
    done();
  };
  request.post(
    'http://localhost:8082/user', {
      json: {
        id: 3,
        firstName: 'hapi',
        lastName: 'makemehapi',
        email: 'hapi@gmail.com',
      },
    },
    (error, response, body) => {
      //  console.log(body);
      callback(body);
    },
  );
});

test('output should be added User if user doesn\'t exist', (done) => {
  const callback = (data) => {
    expect(data).toEqual('Added User');
    done();
  };
  request.post(
    'http://localhost:8082/users', {
      json: {
        id: 3,
        firstName: 'hapi',
        lastName: 'makemehapi',
        email: 'hapi@gmail.com',
      },
    },
    (error, response, body) => {
      //  console.log(body);
      callback(body);
    },
  );
});
