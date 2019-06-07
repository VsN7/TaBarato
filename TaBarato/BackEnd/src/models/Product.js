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
  }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);