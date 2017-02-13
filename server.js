/**
 * Created by administrator on 13/2/17.
 */
let express=require('express');
let bodyParser=require('body-parser');
let path=require('path');

let app=express();

app.use(express.static(path.join(__dirname+'/public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.route('/*').get(function(req, res) {
    return res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(8090, function () {
  console.log('Server runing at localhost:8090 ');
});
