import mongoose from "mongoose";

const connection = {};

(async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	try {
		const db = await mongoose.connect('mongodb://localhost:27017/?readPreference=primary&ssl=false', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});

		connection.isConnected = db.connections[0].readyState;

		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
	}
})();
