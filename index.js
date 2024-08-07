const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel from Arbaz 8-7-2024 +++ gulves0 +++"));
app.get("*",(req,res)=>{

console.log("someone hit on wrong route");
    res.send("vendoring beyound")
});
app.post("/login", (req, res) => res.send("Express on Vercel from login gulves"));
app.listen(3000, () => console.log("Server ready on port 3000."))
