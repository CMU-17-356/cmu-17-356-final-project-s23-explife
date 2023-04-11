import mongoose from 'mongoose';

const { Model, Schema } = mongoose;

export const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});


var User: typeof Model = mongoose.model('user', userSchema);
export default User;