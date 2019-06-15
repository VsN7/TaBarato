const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  apelido: {
    type: String,
    required: true,
  },

});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);