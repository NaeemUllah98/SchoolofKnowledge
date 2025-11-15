const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
res.send("All Users");

})

router.post("/", (res,req)=>{
   res.send("Create a New User") 
})

module.exports = router;