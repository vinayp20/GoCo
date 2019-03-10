var express = require("express");
var app = express();

app.get("/url/:param", (req, res, next) => {
 res.json(["The","search","query","is",req.params.param]);
});

app.listen(process.env.PORT || 3000, () => {
 console.log("Server running on port 3000");
});