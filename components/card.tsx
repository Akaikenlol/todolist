"use client";

import { useState, useEffect } from "react";
import Check from "./check";
import Image from "next/image";

type Task = {
	name: string;
	finished: boolean;
};

const Card = () => {
	const [userInput, setUserInput] = useState("");
	const [todoList, setTodoList] = useState<Task[]>([]);

	const addItem = (e: React.FormEvent) => {
		e.preventDefault();
		const trimmedUserInput = userInput.trim();
		if (trimmedUserInput) {
			setTodoList((existingItems) => [
				...existingItems,
				{ name: trimmedUserInput, finished: false },
			]);
			setUserInput("");
		}
	};

	const toggle = (index: number) => {
		setTodoList((e: Task[]) =>
			e.map((item, i) =>
				index === i ? { ...item, finished: !item.finished } : item
			)
		);
	};

	const deleteTask = (index: number) => {
		setTodoList((e: Task[]) => e.filter((_, i) => index !== i));
	};

	useEffect(() => {}, [todoList]);

	return (
		<div className="flex flex-col items-center justify-center">
			<form
				className="bg-teal-200 w-[350px] flex justify-center items-center mt-10 rounded-lg shadow-md"
				onSubmit={addItem}
			>
				<input
					type="text"
					placeholder="Add a text..."
					className="outline-none bg-transparent w-[350px] p-2 "
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
				/>
				<button className=" rounded-md p-2 bg-transparent hover:bg-emerald-300 ease-in-out duration-300">
					<Image
						src="/assets/plus.png"
						alt="search"
						width={25}
						height={25}
						className=" object-cover"
					/>
				</button>
			</form>
			<div className="">
				{todoList.map(
					(item, index) =>
						!item.finished && (
							<Check
								key={index + item.name}
								label={item.name}
								checked={item.finished}
								onToggle={() => toggle(index)}
								onDelete={() => deleteTask(index)}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default Card;
