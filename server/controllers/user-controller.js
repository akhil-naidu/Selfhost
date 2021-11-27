const HttpError = require('../models/http-error');

const DUMMY_USERS = [
  { id: 1, name: 'Akhil', age: 20 },
  { id: 2, name: 'Naruto', age: 18 },
  { id: 3, name: 'Luffy', age: 16 },
];

const getUserById = (req, res, next) => {
  // logs
  console.log(`Get Request to /api/user/:uid`);

  // capturing required data
  const userId = req.params.uid;

  // base logic
  const userDate = DUMMY_USERS.find((user) => user.id === Number(userId));

  // error handling
  if (!userDate) return next(new HttpError('Invalid User ID', 404));

  // response
  res.json({ userDate });
};

const getUserByName = (req, res, next) => {
  // logs
  console.log(`Get Request to /api/user/name/:uname`);

  // capturing required data
  const userName = req.params.uname;

  // base logic
  const userDate = DUMMY_USERS.find(
    (user) => user.name.toLowerCase() === userName.toLowerCase(),
  );

  // error handling
  if (!userDate) return next(new HttpError('Invalid User ID', 404));

  // response
  res.json({ userDate });
};

exports.getUserById = getUserById;
exports.getUserByName = getUserByName;
