const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/config");

// dotenv config
dotenv.config();

// DataBase config
connectDB();

// rest Object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/items", require("./routes/itemRoutes"));
// app.get("/", (req, res) => {
//   res.send(`POS Backend`);
// });

// PORT
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
