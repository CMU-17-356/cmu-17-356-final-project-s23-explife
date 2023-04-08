import mongoose from 'mongoose';
import express, {Express, Request, Response} from 'express';
import cors from 'cors';


const app = express();

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors({ origin: ['http://localhost:8080', 'https://donuts-and-drones.fly.dev/'] , methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'] }));
app.use(express.json());

app.get('/', (req: Request, res: Response)=>{
  res.status(200).send('Our backend API for EXPLife :)')
});


const start = async () => {
  try {
    // TODO need to change the mongoose cluster url
    // await mongoose.connect("mongodb+srv://admin:somethingSecure@donut-backend.firu8qw.mongodb.net/?retryWrites=true&w=majority");
    // mongoose.set('strictQuery', true);
    app.listen(3000);
  } catch (error) {
    document.write(error as string);
    process.exit(1);
  }
};

start();

module.exports = app