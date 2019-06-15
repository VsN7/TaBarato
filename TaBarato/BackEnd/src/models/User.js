const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
  nome_usuario: {
    type: String,
    required: true,
  }
});

=======
  nome: {
    type: String,
    required: true,
  },
  apelido: {
    type: String,
    required: true,
  },

});
>>>>>>> c8b16feb3fb4bb920baf6f5eaa7b5b8612ea798f

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);