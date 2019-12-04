const express = require("express");
const router = express.Router();
const driver = require("../models/drivers");

router.get("/all", async (req,res) => {
    const allDrivers = await driver.find();
    console.log(allDrivers);
    res.send(allDrivers);
})

router.post("/new", async (req,res) => {
    const {name,mail,password,expediente,userType} = req.body;
//     const data = {
//         name: "Elkrikosojson",
//         mail: "Elkrik@gmail.com",
//         password:"321", 
//         expediente:"264869",
//         userType: "sin carro",
//         routes:{
//         days:{
//             lunes:[],
//             martes:[],
//             miercoles:[],
//             jueves:[],
//             viernes:[],
//         },
//         coordinates:[],
//         checkPoints:[]
//     }
// };
    //const {name,mail,password,expediente,userType} = req.body;
    //console.log(data)
    const newDriver = new driver({name,mail,password,expediente,userType});
    await newDriver.save()
    res.send(newDriver);

})

router.put("/addRoutes",async (req,res) =>{
    const{_id,routes} = req.body;
    await driver.findById(_id, function(err, driver){
        console.log(err);
        console.log(routes)
        driver.set({routes:routes})
        driver.save();
    });
    // console.log(selected);
    // console.log(routes);
    // await selected.push({routes});
    // selected.save()

    res.send("ya quedo");
})

router.get("/delete:_id", async (req,res) => {
    // console.log(req.body);
    // const {_id} = req.body;
    const id = req.params;
    console.log(id);
    await driver.findOneAndRemove(id, function(err){
        console.log(err);
    });
    res.send("ya quedo")
})


router.get("/find", async (req,res) => {
    const {mail} = req.body
    const match = await driver.find({mail});
    console.log(match);
    res.send(match);
})

module.exports = router;
