import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required!"],
		trim: true,
	},
	
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Employee ||
	mongoose.model("Student", StudentSchema);
