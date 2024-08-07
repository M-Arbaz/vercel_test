const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel from Arbaz 9-7-2024"));
app.post("/login", (req, res) => res.send("Express on Vercel from login"));
app.listen(3000, () => console.log("Server ready on port 3000."))
