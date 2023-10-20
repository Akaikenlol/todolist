import React from "react";

const Warning = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-2 gap-2">
			<div className="bg-neutral-300 flex justify-center items-center text-center rounded-lg w-fit h-auto">
				<h1 className="text-xl font-bold text-rose-400 p-2 ">
					💢You cannot add more than this!💢
				</h1>
			</div>
			<div className="bg-neutral-300 flex justify-center items-center text-center rounded-lg w-fit h-auto">
				<p className="text-xl font-bold text-rose-400 p-2 ">
					💢Finished current task before adding new!💢
				</p>
			</div>
		</div>
	);
};

export default Warning;
