// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server');
const {
  validateSignupInput,
  validateLoginInput,

} = require('../../utils/validators');
// const { SECRET_KEY } = require('../../config/connection');
const User = require('../../models/User');
const authMiddleware = require('../../utils/auth');

// function generateToken(user) {
//   return jwt.sign(
//     {
//       id: user.id,
//       email: user.email,
//       username: user.username
//     },
//     SECRET_KEY,
//     { expiresIn: '1h' }
//   );
// }

module.exports = {
  Query: {
      getUsers: async () => {
          try {
              const users = await User.find();
              return users;
          } catch (err) {
              throw new Error(err);
          }
      },
  },
  Mutation: {
      login: async (parent, { username, password }) => {
        const valid = validateLoginInput( username, password );

          if (!valid) throw new AuthenticationError('Errors', { errors });

          const user = await User.findOne({ username });
          if (!user)
              throw new AuthenticationError('User not found', {
                  errors: { general: 'User not found' },
              });

          const matchPassword = await bcrypt.compare(password, user.password);

          if (!matchPassword)
              throw new AuthenticationError('Wrong credentials', {
                  errors: { general: 'Wrong credentials' },
              });

              const token = auth(user);
              return { token, user };
      },
      signup: async ( parent, { username, email, password }) => {
          const user = validateSignupInput( username, email, password);
          const token = signToken(user);

          if (!user) throw new AuthenticationError('Errors', { errors });

          const userUsername = await User.findOne({ username });
          const userEmail = await User.findOne({ email });

          if (userUsername)
              throw new AuthenticationError('Username is taken', {
                  errors: {
                      username: 'This username is taken',
                  },
              });
          else if (userEmail)
              throw new AuthenticationError('Email already in use', {
                  errors: {
                      email: 'There is already a user with this email',
                  },
              });

          password = await bcrypt.hash(password, 12);
            
          return { token, user };
      },
  },
};
