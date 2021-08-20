const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
const dotenv = require("dotenv");
const tf = require("@tensorflow/tfjs");
const mongoose = require("mongoose");
global.fetch = require("node-fetch");

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

app.post("/upload", async (req, res) => {
    const file = req.files.file;
    const url = process.env.MODEL_URL;
    const test_url = process.env.TEST_URL;
    console.log(file);
    try {
        const model = await tf.loadLayersModel(url);
        // const input_nos = tf.tensor2d([[0, 1]]);
        // const output = model.predict(input_nos);
        // const outputData = Math.round(output.dataSync());
        // console.log(outputData);
        //const fileData = model.predict(file);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));


