const combineUsers = require('../index');

describe('combineUsers function', () => {
  const testArrays = [["Jim3","Pam5"], ["Michael6"], ["Jack_jack"]];
  const result = combineUsers(...testArrays);

  test('should return an object', () => {
    expect(typeof result).toBe('object');
  });

  test('should have users and merge_date properties', () => {
    expect(result).toHaveProperty('users');
    expect(result).toHaveProperty('merge_date');
  });

  test('should merge all usernames into one array', () => {
    expect(result.users).toEqual(["Jim3","Pam5","Michael6","Jack_jack"]);
  });

  test('should contain today\'s date in M/d/yyyy format', () => {
    const today = Date.today().toString('M/d/yyyy');
    expect(result.merge_date).toBe(today);
  });
});
