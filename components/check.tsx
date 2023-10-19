import Image from "next/image";

type CheckProps = {
	label: string;
	checked: boolean;
	onToggle: () => void;
	onDelete: () => void;
};

const Check: React.FC<CheckProps> = ({
	label,
	checked,
	onToggle,
	onDelete,
}) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="bg-sky-200 w-[350px] flex justify-between items-center  text-center mt-10 rounded-lg shadow-md mx-2 ">
				<input type="checkbox" className="mx-2 outline-none" />
				<p className="p-2 truncate">{label}</p>
				<button>
					<Image
						src="/assets/cross.png"
						alt="cross"
						width={25}
						height={25}
						className="object-contain mr-10 "
					/>
				</button>
			</div>
		</div>
	);
};

export default Check;
