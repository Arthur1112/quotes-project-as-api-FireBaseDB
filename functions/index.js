import functions from "firebase-functions";
import express from 'express'
import cors from 'cors'
import { dbConnect } from "./src/connectDB.js";
import { listOfQuotes } from "./src/getListOfQuotes.js";

const app = express();
app.use(cors());
app.use(express.json());

const db = dbConnect()

app.get('/test', (req, res) => {
  res.send('Test worked ❤️')
})

app.get('/quotes', listOfQuotes)


app.post('/addNewQuote', async (req, res) => {
  await db.collection('MotivationalQuotes').add(req.body)
  res.status(201).send('New Quote has been added to the database')
})


export const api = functions.https.onRequest(app);
