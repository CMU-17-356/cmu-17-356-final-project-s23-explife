import mongoose from 'mongoose';
import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import User from './models/user_model'
import List from './models/list_model'
import ListItem from './models/list_item_model'


const app = express();

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors({ origin: ['http://localhost:19006'] , methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'] }));
app.use(express.json());

app.get('/', (req: Request, res: Response)=>{
  res.status(200).send('Our backend API for EXPLife :)')
});

/* **************
 User endpoints
*************** */
// get all users
app.get('/users', async (req: Request, res: Response) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});

// get specific users
app.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.status(200).json(user);
});

// create new users
app.post("/users", async (req: Request, res: Response) => {
  const newUser = new User({ ...req.body });
  const insertedUser = await newUser.save();
  return res.status(201).json(insertedUser);
});

// update specific users
app.put("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await User.updateOne({ id }, req.body);
  const updatedUser = await User.findById(id);
  return res.status(200).json(updatedUser);
});

// delete specific users
app.delete("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  return res.status(200).json(deletedUser);
});

/* **************
 List endpoints
*************** */
// get all lists
app.get('/lists', async (req: Request, res: Response) => {
  const allLists = await List.find();
  return res.status(200).json(allLists);
});

// get specific list
app.get("/lists/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const list = await List.findById(id);
  return res.status(200).json(list);
});

// create new list
app.post("/lists", async (req: Request, res: Response) => {
  const list = new List({ ...req.body });
  const insertedList = await list.save();
  return res.status(201).json(insertedList);
});

// update specific lists
app.put("/lists/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await List.updateOne({ _id: id }, req.body);
  const updatedList = await List.findById(id);
  return res.status(200).json(updatedList);
});

// delete specific list
app.delete("/lists/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedList = await List.findByIdAndDelete(id);
  return res.status(200).json(deletedList);
});



const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:secretPassword@explife.y1ivsws.mongodb.net/?retryWrites=true&w=majority");
    mongoose.set('strictQuery', true);
    app.listen(3000);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

module.exports = app