const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);