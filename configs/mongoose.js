const mongoose=require('mongoose');

mongoose.connect(`mongodb://localhost/bankist_db`);
const bankist_db=mongoose.connection;

//if error
bankist_db.on('error',console.error.bind(console,'error connecting to DataBASE'));

//if connection sucesfull
bankist_db.once('open',function(){
    console.log("Successfully connected to DataBase");
})
