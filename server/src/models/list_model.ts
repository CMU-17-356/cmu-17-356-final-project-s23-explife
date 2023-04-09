import mongoose from 'mongoose';
import listItemSchema from './list_item_model';
import userSchema from './user_model';
const { Model, Schema } = mongoose;

const listSchema = new Schema({
  date: { type: Date, required: true },
  items: { type: [listItemSchema], required: true },
  story: { type: String, required: false },
  image_url: { type: String, required: false },
  user: { type: userSchema, required: true }
});


var List: typeof Model = mongoose.model('list', listSchema);
export default List;