const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../../models/User");
const { signToken } = require("../../utils/auth");

const UserResolver = user => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1h',
        }
    );
};

module.exports = {
    Query: {
        getUsers: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (err) {
                throw new AuthenticationError("Not logged in");
            }
        },
    },

Mutation: {
    addUser: async (parent, args) => {
        console.log(args);
        const user = await User.create(args);
        const token = signToken(user);
  
    const { errors, valid } = validateAddUser(
        username,
        password,
        email
    );

    if (!valid) {
      throw new AuthenticationError("Incorrect credentials");
    }
    const userUsername = await User.findOne({ username });
    const userEmail = await User.findOne({ email });

    if (userUsername)
    throw new AuthenticationError("Username is taken", {
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

    const newUser = new User({
        username,
        password,
        email,
        createdAt: new Date().toISOString(),
    });

    const res = await newUser.save();

    const token = UserResolver(res);

    return {
        token,
        user
    };
  },   
 }
}