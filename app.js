const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const resumeRoutes = require('./routes/resumeRoutes');
require('dotenv').config();

const app = express();
const ClintURL="http://localhost:3000"
app.use(cors(ClintURL));
app.use(bodyParser.json());

app.use('/api', resumeRoutes);

// Set up MongoDB connection 
const { MONGO_URI } = process.env;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
