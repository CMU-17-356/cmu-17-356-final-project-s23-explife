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
app.use(cors({ origin: ['http://localhost:8080'] , methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'] }));
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
  await List.updateOne({ id }, req.body);
  const updatedList = await List.findById(id);
  return res.status(200).json(updatedList);
});

// delete specific list
app.delete("/lists/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedList = await List.findByIdAndDelete(id);
  return res.status(200).json(deletedList);
});

/* **************
 List Item endpoints
*************** */
// create new listitem
app.post("/listItem", async (req: Request, res: Response) => {
  const listItem = new ListItem({ ...req.body });
  const insertedListItem = await listItem.save();
  return res.status(201).json(insertedListItem);
});

// update specific list item
app.put("/listItem/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await ListItem.updateOne({ id }, req.body);
  const updatedListItem = await ListItem.findById(id);
  return res.status(200).json(updatedListItem);
});

// delete specific list item
app.delete("/listItem/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedListItem = await ListItem.findByIdAndDelete(id);
  return res.status(200).json(deletedListItem);
});


const start = async () => {
  try {
    // TODO need to change the mongoose cluster url
    // await mongoose.connect("");
    // mongoose.set('strictQuery', true);
    app.listen(3000);
  } catch (error) {
    document.write(error as string);
    process.exit(1);
  }
};

start();

module.exports = app