const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  produto: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true,
  },
  local: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
<<<<<<< HEAD
    required: true,
=======
    default: Date.now,
>>>>>>> c8b16feb3fb4bb920baf6f5eaa7b5b8612ea798f
  },
});


ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);