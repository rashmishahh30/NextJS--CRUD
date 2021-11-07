import Student from "@/models/Student";
import "@/utils/dbConnect";

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const students = await Student.find({}).sort({
					createdAt: "desc",
				});

				return res.status(200).json({
					success: true,
					data: students,
				});
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		case "POST":
			try {
				const students = await Student.create(req.body);
				return res.status(201).json({
					success: true,
					data: students,
				});
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		default:
			res.setHeaders("Allow", ["GET", "POST"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};
