const HttpError = require('../models/http-error');
const User = require('../models/user');

const DUMMY_USERS = [
  { id: 1, name: 'Akhil', age: 20 },
  { id: 2, name: 'Naruto', age: 18 },
  { id: 3, name: 'Luffy', age: 16 },
];

const getUserById = async (req, res, next) => {
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

const getUserByName = async (req, res, next) => {
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

const createUser = async (req, res, next) => {
  // logs
  console.log(`post request to /api/user`);

  // capturing required data
  const { name, age } = req.body;

  // basic logic
  const createUser = new User({
    name,
    age,
  });

  try {
    await createUser.save();
  } catch (error) {
    return next(new HttpError('Creating user failed', 500));
  }

  // response
  res.status(201).json({ createUser });
};

exports.getUserById = getUserById;
exports.getUserByName = getUserByName;
exports.createUser = createUser;
