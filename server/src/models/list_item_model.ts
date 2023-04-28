import mongoose from 'mongoose';

const { Model, Schema } = mongoose;

export const listItemSchema = new Schema({
  deadline: { type: Date, required: true },
  completed: { type: Boolean, required: true },
  name: { type: String, required: true },
  priority: { type: Number, required: true },
});


var ListItem: typeof Model = mongoose.model('listItem', listItemSchema);
export default ListItem;