import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
		.connect(
			'mongodb+srv://opiyosbenji:ybLVkXbKr3VDbO3y@cluster0.u45th.mongodb.net/test'
		)
		.then(() => console.log('Db Connected'));
};
