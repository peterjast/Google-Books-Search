require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const mongoose = require("mongoose");
const mongoURL = process.env.PROD_MONGODB || "mongodb://heroku_fxl3d337:9cm5m4tejmn0raotdgmklnoidp@ds211096.mlab.com:11096/heroku_fxl3d337"
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
