import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		try {
			const { title, finished } = req.body;
			const task = await prisma.task.create({
				data: {
					title,
					finished,
				},
			});
			res.status(201).json(task);
		} catch (error: any) {
			console.log("error", error);
			res.status(500).json({ error: "Error creating task" });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
}
