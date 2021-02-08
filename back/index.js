require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const work = require("./routes/work");
const mail = require("./routes/email");
const images = require("./routes/images");

app.use(cors());
app.use(express.json());

app.use("/work", work);
app.use("/mail", mail);
app.use("/images", images);

app.listen(port, () => {
  console.log("Server on" + port);
});
