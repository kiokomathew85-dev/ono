require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  args.forEach((userArray) => {
    combinedObject.users = [...combinedObject.users, ...userArray];
  });

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = combineUsers;
