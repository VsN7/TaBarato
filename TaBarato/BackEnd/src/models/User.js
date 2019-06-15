const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  nome_usuario: {
    type: String,
    required: true,
  }
});


UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);