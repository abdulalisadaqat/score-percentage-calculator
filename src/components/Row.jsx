import { useState } from "react";
const Row = ({ id, subjects, setSubjects }) => {
	const [creditInputDisabled, setCreditInputDisabled] = useState(true);
	const [totalScore, setTotalScore] = useState("");
	const handleInputChange = (id, field, value) => {
		subjects.map((subject) => {
			if (subject.id == id) {
				subject[field] = Number(value);
				subject.total =
					value * (field === "score" ? subject.credits : subject.score);
				setTotalScore(subject.total);
			}
		});
		console.log(subjects);
	};

	return (
		<>
			<tr className="max-sm:text-sm">
				<td>{id}</td>
				<td>
					<input
						type="number"
						id={`score-${id}`}
						className="w-full h-full border-none p-2 text-center focus:outline-none focus-visible:outline-blue-300 placeholder-gray-400"
						placeholder="نمره"
						onChange={(e) => {
							setCreditInputDisabled(false);
							handleInputChange(id, "score", e.target.value);
						}}
					/>
				</td>
				<td>
					<input
						type="number"
						id={`credits-${id}`}
						className="w-full h-full border-none p-2 text-center focus:outline-none focus-visible:outline-blue-300 disabled:placeholder-gray-300 disabled:bg-white"
						placeholder="کردیت"
						disabled={creditInputDisabled}
						onChange={(e) => handleInputChange(id, "credits", e.target.value)}
					/>
				</td>
				<td>
					<span>{totalScore}</span>
				</td>
			</tr>
		</>
	);
};

export default Row;
