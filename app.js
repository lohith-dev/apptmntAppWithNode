const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const errorController = require('./controllers/error');

const sequelize = require('./util/database');
const app = express();

app.use(cors());


const appRoutes = require('./routes/appointment.js');

app.use(express.json());


app.use('/appointmentData', appRoutes);


app.use(errorController.get404);

sequelize.sync().then(result=>{
    app.listen(8000,()=>{
        console.log("Server listening at port 8000");
    });
})
.catch(err=>{
    console.log(err);
})


