import mongoose from "mongoose";

export const connectDb = async () => {
	try {
		const connect = await mongoose.connect('mongodb+srv://cherpanath2105023:Vinma03@cluster0.xc2xzn0.mongodb.net/us');
		console.log("DATABASE CONNECTED", connect.connection.name);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
