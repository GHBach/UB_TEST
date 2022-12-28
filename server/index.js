const httpServer = require("./config/server");


const runServer = async () => {
    try {
        await httpServer(process.env.PORT || 5000);
    } catch (err) {
        throw err;
    }
}

runServer().then(() => {
    console.log(">>> Server is running ...");
});
