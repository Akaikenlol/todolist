"use client";

import { useState, useEffect } from "react";
import Check from "./check";
import Image from "next/image";
import Warning from "./warning";

type Task = {
	name: string;
	finished: boolean;
};

const Card = () => {
	const [userInput, setUserInput] = useState("");
	const [todoList, setTodoList] = useState<Task[]>([]);
	const [displayWarning, setDisplayWarning] = useState(false);

	// const addItem = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	const trimmedUserInput = userInput.trim();
	// 	if (trimmedUserInput) {
	// 		setTodoList((existingItems) => [
	// 			...existingItems,
	// 			{ name: trimmedUserInput, finished: false },
	// 		]);
	// 		setUserInput("");
	// 	}
	// };

	const addItem = (e: React.FormEvent) => {
		e.preventDefault();
		const trimmedUserInput = userInput.trim();

		if (trimmedUserInput) {
			const maxItems = 6;
			if (todoList.length < maxItems) {
				setTodoList((existingItems) => [
					...existingItems,
					{ name: trimmedUserInput, finished: false },
				]);
				setUserInput("");
			} else {
				setDisplayWarning(true);
			}
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

	const countWords = (text: string) => {
		const words = text.trim().split(/\s+/);
		return words.length;
	};

	const handleInput = (e: any) => {
		setUserInput(e.target.value);
		const wordCount = countWords(e.target.value);
		if (wordCount >= 30) {
			setDisplayWarning(true);
		} else {
			setDisplayWarning(false);
		}
	};

	useEffect(() => {}, [todoList]);

	return (
		<div className="flex justify-center items-center">
			<div className="max-w-full w-[40vw] h-[90vh] border border-black mx-auto rounded-md">
				<form
					className="bg-teal-200 w-[350px] flex justify-center mx-auto mt-10 rounded-lg shadow-md"
					onSubmit={addItem}
				>
					<input
						type="text"
						placeholder="Add a text..."
						className="outline-none bg-transparent w-[350px] p-2 "
						value={userInput}
						// onChange={(e) => setUserInput(e.target.value)}
						maxLength={30}
						onChange={handleInput}
					/>
					<button className=" rounded-md p-2 bg-transparent hover:bg-emerald-300 ease-in-out duration-300">
						<Image
							src="/assets/plus.png"
							alt="search"
							width={25}
							height={25}
							className=" object-cover outline-none"
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
				{displayWarning && <Warning />}
			</div>
		</div>
	);
};

export default Card;
