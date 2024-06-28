import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://earlekaro:45WoyB1yNuDOmJiO@cluster0.dm08a4p.mongodb.net/food-del"
    )
    .then(() => console.log("Db Connected"));
};
