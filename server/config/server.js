const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");


const TestController = require("../controllers/TestController");

const app = express();


const initiateHttpServer = (port) => {
    return new Promise((resolve) => {
        console.log(">>> Server Initializing...");
        app.use(bodyparser.urlencoded({extended: true}));
        app.use(bodyparser.json());
        app.use(cookieParser());

        /* ROUTER (CONTROLLER) DECLARATION */
        app.use("/api/test", TestController)

        
        app.listen(port, () => {
        console.log(`>>> Server listening on ${port}\n`);
        });
        resolve();
    })
}

module.exports = initiateHttpServer;