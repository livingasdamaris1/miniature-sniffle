import express from 'express';
import mongoose from 'mongoose';


await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());

//import routes
import journalRoutes from './routes/journalRoutes.js';
app.use(journalRoutes);

//error handling middleware


//listen for incoming requests
const port = process.env.PORT || 4001
app.listen(4001, () => {
  console.log(`Server is listening on port ${port}`);
});