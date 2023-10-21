import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		try {
			const tasks = await prisma.task.findMany();
			res.status(200).json(tasks);
		} catch (error: any) {
			console.error(error);
			res.status(500).json({ error: "Error fetching tasks" });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
};
