import Card from "@/components/card";
import Warning from "@/components/warning";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<h1 className="flex justify-center text-center text-2xl font-bold my-2">
				To Do List
			</h1>
			<Card />
			{/* <Warning /> */}
		</div>
	);
}
