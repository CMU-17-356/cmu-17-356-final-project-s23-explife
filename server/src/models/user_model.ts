import mongoose from 'mongoose';

const { Model, Schema } = mongoose;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});


var Usesr: typeof Model = mongoose.model('list', userSchema);
export default Usesr;