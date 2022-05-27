import { dbConnect } from "./connectDB.js";

export const listOfQuotes = async (req, res) => {
  const db = dbConnect();
  const quotes = await db.collection('MotivationalQuotes').get();
  const quotesArray = quotes.docs.map(doc => doc.data());
  res.status(200).send(quotesArray)
}
