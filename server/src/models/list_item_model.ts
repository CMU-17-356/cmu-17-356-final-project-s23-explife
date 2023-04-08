import mongoose from 'mongoose';

const { Model, Schema } = mongoose;

const listItemSchema = new Schema({
  deadline: { type: Date, required: true },
  completed: { type: Boolean, required: true },
  priority: { type: Number, required: true },
});


var ListItem: typeof Model = mongoose.model('list', listItemSchema);
export default ListItem;