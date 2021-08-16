const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// routes import
const authRoutes = require("./Routes/auth");
const tournamentRoutes = require("./Routes/tournament");

// setting dotEnv
dotenv.config({ path: "./.env" });

// init app
const app = express();

// setting cors
app.use(cors({ origin: true }));

// setting parsers
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// api routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tournament", tournamentRoutes);

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting Down Server due to Uncaught Exception");
  process.exit(1);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
});

// connecting with mongooDb
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Database Connected");

    // starting server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on PORT : ${process.env.PORT} .`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection ERROR :", error);
  });
