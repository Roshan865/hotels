const mongoose = require('mongoose');
// mongodb url

const mongoURL = 'mongodb://localhost:27017/mydata'

//set up mongoDB connection 
mongoose.connect(mongoURL,
   {
    useNewUrlParser: true ,
    useUnifiedTopology: true
   }
)
//Get default connection 
const db = mongoose.connection;
//Define event listeners 
db.on ('connected',()=> {
     console.log('connected to MongoDB server');
});
db.on ('error',()=> {
     console.log(' MongoDB connection error',err);
});
db.on ('disconnected',()=> {
     console.log('MongoDB disconnected');
});

module.exports = db;