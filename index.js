const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel from Arbaz"));
app.get("/login", (req, res) => res.send("Express on Vercel from login"));
app.listen(3000, () => console.log("Server ready on port 3000."))
