const express = require('express');
const mongoose = require('mongoose' );
const app = express();
app.listen(3000, () => {
 console.log(`Server Started at ${ 3000}`)
})
mongoose.connect('mongodb://localhost:27017/apiMongoose' );
// mongodb+srv://BashDeen:Berrybash419@cluster0.tcy5skl.mongodb.net/
const database = mongoose.connection ;
const routes = require('./routes/routes');
app.use('/api', routes)