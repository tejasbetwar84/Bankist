const express=require('express');
const app=express();
const port=8000;
const http=require('http').createServer(app);
const mongoose=require('./configs/mongoose');

app.use(express.static('assets'));
app.use(express.urlencoded());


app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'))



app.listen(port,function(err){
if(err){
    console.log('problem in connecting !');
}

    console.log('Banking is runninng onn port',port);

});