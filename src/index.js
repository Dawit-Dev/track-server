require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);



const mongoUri =
  "mongodb+srv://dawit-dev:PZYzlvBria4B0eSl@mymongodb.ku54k5n.mongodb.net/?retryWrites=true&w=majority"
// if (!mongoUri) {
//   throw new Error(
//     `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
//   );
// }

// mongoose.set("strictQuery", true);
// resolves future deprecation issue with Mongoose v7

mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
 

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});



app.listen(3000, () => {
  console.log("Listening on port 3000");
});
