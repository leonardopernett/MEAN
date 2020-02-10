const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();

//mongooose
require('./database.js');

//setting
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

//router

app.use('/api/employees', require('./router/employee.js'))


//listen
app.listen(app.get('port'), ()=>{
    console.log('server on port 3000');
})