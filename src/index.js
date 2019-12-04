//NPM INPORTS
const express = require("express");
const morgan = require("morgan")
const app = express();

//SETTING
app.set("port", 3000);
app.set("json spaces", 2);

//MIDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//ROUTES
app.use(require("./routes/index"));
app.use("/api/driver",require("./routes/drivers"));

//INIZALIZATIONS
app.listen(3000, ()=>{
    console.log(`Server running on port: ${3000}`);
})
require("./database")



