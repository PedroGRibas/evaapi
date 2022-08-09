
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const indexRoute = require('./routes/index');

app.use(express.static(path.join(__dirname,'public')));

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',indexRoute)
app.listen(port,err=>{
    console.log(`Server Started, port ${port}`);
});
