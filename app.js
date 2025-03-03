const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

app.use("/project", express.static("project"));
app.use(express.json());
app.use("/text", express.static("text"));
