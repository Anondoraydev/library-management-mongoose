import mongoose from "mongoose";
import app from "./app";

const PORT = 5000;
const MONGO_URI =
  "mongodb+srv://libraryDB:rrBysCAOMzwMtpHZ@cluster0.gbp43.mongodb.net/libraryDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
