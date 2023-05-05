const express = require('express');
const apiRouter = require('C:/Users/zeta/Desktop/API_Port/routes/api.js');
const bodyparser = require('body-parser');
const cors = require('cors');

//Express instance in app
const app = express();

//cors_configuration
app.use(cors({ origin: "*" }));

//Server_Settings
app.set('port', process.env.PORT || 9001)
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


//routes
app.use('/api', apiRouter);

app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})


module.exports = app;