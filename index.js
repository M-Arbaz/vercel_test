const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, `file-${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({ storage: storage });
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/data', express.static('uploads'));
app.get("/", (req, res) => res.send("Express on Vercel from Arbaz 8-7-2024 +++ gulves01 +++"));
app.get("*",(req,res)=>{

console.log("someone hit on wrong route");
    res.send("vendoring beyound")
});
app.post('/upload',upload.single("key"), async (req, res) => {
res.send(req.file);
})
app.post("/login", (req, res) => res.send("Express on Vercel from login gulves"));
app.listen(3000, () => console.log("Server ready on port 3000."))
