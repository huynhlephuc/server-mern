import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {CONNECTION_URL, connect} from './db.js'
import studentRouters from './routes/student.js'



// connect to mongodb
const app = express();
app.use(cors({
  // origin:'http://localhost:3000'
}));

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));


app.use('/students', studentRouters);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  console.log('vcl',CONNECTION_URL )
  connect()
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})


// starting with student Router
