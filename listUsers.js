/**
 * Created by kaya on 10/29/16.
 */
var express = require("express");
var app = express();
var fs = require("fs");
var directionAdd = __dirname + "/" + "users.json";
//show the all users in users.json
app.get('/listUsers', function (req,res) {
    fs.readFile(directionAdd, "utf8", function (err, data) {
        console.log(data)
        //users = JSON.stringify(data);//this split each chars ==> not gonna work
        users = JSON.parse(data);
        console.log("SHOW user ");
        console.log(users["user1"].id);//get user1's info
        /*for(var i = 0; i < users.length; i++)
        {
            console.log(users["user"+i]);
        }*/
        res.end(data);

    });
});
//Add a user
var user = {
    "user4":{
        "name":"mohit",
        "password": "passowrd4",
        "profession":"teacher",
        "id":4
    }
}
app.get('/addUser', function (req, res) {
    //First read existing users
    fs.readFile(directionAdd, "utf8", function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
    //delete all existing data and write
    //fs.writeFile(directionAdd, JSON.stringify(user, null, "   "));
    fs.writeFileSync(directionAdd, JSON.stringify(user));
    //
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("http://127.0.0.1:8081/listUsers");
});