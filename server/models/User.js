const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    createdAt: String,
  },
  {
    // toJSON: {
    //   virtuals: true
    // }
  }
);

// set up pre-save middleware to create password
// userSchema.pre('save', async function(next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function(password) {
//   return bcrypt.compare(password, this.password);
// };

module.exports = model('User', userSchema);
