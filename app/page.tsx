import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<h1 className="flex justify-center text-center text-2xl font-bold  mt-10">
				To Do List
			</h1>
			<Card />
		</div>
	);
}
