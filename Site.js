const express = require("express");
const path = require("path");
const os = require('os');

const app = express();

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'/public')));

process.env.PORT = 8000;

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`The app is listening in the port ${port}`);
});

app.get("/", function(req,res) {
    let currentTimestamp = Date.now();
    let dateObject = new Date(currentTimestamp);
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();
    let timeString = hours+":"+minutes+":"+seconds;

    let dateString = dateObject.toDateString();

    var hostname = os.hostname();
    var IPAddresslist = "192.168.x.y";
    res.render("pages/Home",{ hostname: hostname, currentTime: timeString, IPAddress: IPAddresslist, currentDate: dateString });
});
