const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const jquery = require("jquery");

const app = express();


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/jquery",express.static(__dirname + '/node_modules/jquery/dist/'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.Email;

    const emailKey = "ZEKa3OIg1GexhoidRK44bn1YPxHdSwUhfuuChRybQ9Ys4qyDAF";
    const urlEmail ="https://app.verify-email.org/api/v1/"+emailKey+"/verify/"+email;

    https.get(urlEmail ,function(resp){
        resp.on("data", function (data) {
            const emailData = JSON.parse(data);
           if (emailData.smtp_log != "Success"){
            res.send('<script>alert("invalid email ,Refresh and Try again")</script>');
            res.end();
            console.log("faild add email");
         }
         });
        //console.log(resp);
    });

    // console.log(firstName , lastName , email);
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us10.api.mailchimp.com/3.0/lists/a9df05d9cb";

    const options = {
        method: "POST",
        auth: "Noha:ac7a4c9bd735bee619c7f78a6879704e-us10"
    };

    const request = https.request(url, options, function (response) {

        if (response.statusCode ===200){
        //    req.body.success.removeClass("invisible");
            res.sendFile(__dirname +"//Homee.html");
         
        }else{
            res.sendFile(__dirname +"/failure.html");
        }

        response.on("data", function (data) {
            // console.log(JSON.parse(data));
        });

    });

    request.write(jsonData);
    request.end();

});

app.post("/failure",function(req , res ){
 res.redirect("/");
});


app.listen(3000, function () {
    console.log("server is done");
});

// Mailchimp Api Key :
//API key: ac7a4c9bd735bee619c7f78a6879704e-us10
//Unique id :
// a9df05d9cb

//email api key :
// ZEKa3OIg1GexhoidRK44bn1YPxHdSwUhfuuChRybQ9Ys4qyDAF