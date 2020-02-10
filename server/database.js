const {connect} = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

const connection = connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useFindAndModify:false
})
.then(db => console.log('db is connected'))
.catch(err=> console.log(err));


module.exports = connection