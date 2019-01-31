const model = require('../../models');

describe('user generate', () => {
  beforeEach(() => {
    model.users.truncate();
  });
  it('should make an entry in the database with the name given', async () => {
    await model.users.generate(1, 'qwe', 'rty', 'qwe.rty@gmail.com');
    await model.users.generate(2, 'asd', 'fgh', 'asd.fgh@gmail.com');
    expect(await model.users.count()).toEqual(2);
  });
});

describe('user getAllUsers', () => {
  beforeEach(() => {
    model.users.truncate();
  });
  it('should return  entries in the table', async () => {
    await model.users.generate(1, 'qwe', 'rty', 'qwe.rty@gmail.com');
    const users = await model.users.getAllUsers();
    expect(users.length).toEqual(1);
  });
  it('should return  entry values in the table', async () => {
    await model.users.generate(1, 'qwe', 'rty', 'qwe.rty@gmail.com');
    const users = await model.users.getAllUsers();
    expect(users[0].dataValues.firstName).toEqual('qwe');
  });
  it('should return undefined as there are no entries', async () => {
    const users = await model.users.getAllUsers();
    expect(users[0]).toEqual(undefined);
  });
});

describe('user delete', () => {
  beforeEach(() => {
    model.users.truncate();
  });
  it('should delete the entry in the database with the id given', async () => {
    await model.users.generate(1, 'qwe', 'rty', 'qwe.rty@gmail.com');
    await model.users.generate(2, 'asd', 'fgh', 'asd.fgh@gmail.com');
    await model.users.deleteUserById(2);
    expect(await model.users.count()).toEqual(1);
  });
});

describe('user update', () => {
  beforeEach(() => {
    model.users.truncate();
  });
  it('should delete the entry in the database with the id given', async () => {
    await model.users.generate(1, 'qwe', 'rty', 'qwe.rty@gmail.com');
    await model.users.generate(2, 'asd', 'fgh', 'asd.fgh@gmail.com');
    await model.users.updateFirstName('asd', 'bnm');
    const newFirstName = await model.users.getUserById(2);
    expect(newFirstName[0].firstName).toEqual('bnm');
  });
});
