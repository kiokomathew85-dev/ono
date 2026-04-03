require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Step 4: Merge Arrays using spread operator
  args.forEach(userArray => {
    combinedObject.users = [...combinedObject.users, ...userArray];
  });

  // Step 5: Get today's date in 'M/d/yyyy' format
  
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = combineUsers;
