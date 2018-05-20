var express = require('express');
var app = express();
var request=require("request");

app.get('/trello/board/:key/:token/:id', function (req, res) {
   var security = '?key='+req.params.key+'&token='+req.params.token;
   var trellourl = 'https://api.trello.com/1/boards/'
   var url = trellourl+req.param.id+security
   request.del(url,function(error,response,body){
    if(error){
                      console.log(error);
                 }else{
                      console.log("Board Deleted");
                }
    });
   console.log(req.params);
   res.send('ok');
})

var server = app.listen(8080,'172.30.132.59', function () {

   var host = server.address().address
   var port = server.address().port

   console.log("server listening at http://%s:%s", host, port)
})