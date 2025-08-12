import { useState } from "react";
import Row from "./components/Row";
import "./App.css";
function App() {
	const subjects = [
		{ id: 1, score: "", credits: 1, total: "" },
		{ id: 2, score: "", credits: 1, total: "" },
		{ id: 3, score: "", credits: 1, total: "" },
		{ id: 4, score: "", credits: 1, total: "" },
		{ id: 5, score: "", credits: 1, total: "" },
		{ id: 6, score: "", credits: 1, total: "" },
		{ id: 7, score: "", credits: 1, total: "" },
	];
	const [result, setResult] = useState({
		score: 0,
		credits: 0,
		percentage: 0,
	});

	const calculateResults = () => {
		const totalScore = subjects.reduce(
			(total, subject) => total + Number(subject.total),
			0
		);
		const totalCredits = subjects.reduce(
			(total, subject) => total + Number(subject.credits),
			0
		);
		setResult({
			score: totalScore,
			credits: totalCredits,
			percentage: parseFloat(totalScore / totalCredits).toFixed(2),
		});
		console.log(result);
	};
	console.log(subjects);
	return (
		<>
			<main className="bg-gray-200/60 w-screen h-screen flex items-center justify-center max-sm:px-3">
				<div className="bg-white shadow-lg rounded p-10 max-sm:p-4" dir="rtl">
					<h1 className="text-center font-bold my-4 md:text-2xl">
						محسابه فیصدی نمرات
					</h1>
					<table className="table">
						<thead className="bg-blue-100">
							<tr>
								<th>#</th>
								<th>نمره</th>
								<th>کردیت</th>
								<th>مجموعه</th>
							</tr>
						</thead>
						<tbody>
							<Row id={1} subjects={subjects} />
							<Row id={2} subjects={subjects} />
							<Row id={3} subjects={subjects} />
							<Row id={4} subjects={subjects} />
							<Row id={5} subjects={subjects} />
							<Row id={6} subjects={subjects} />
							<Row id={7} subjects={subjects} />
						</tbody>
					</table>

					<button
						type="button"
						className="bg-blue-700 text-white w-full my-2 p-2 rounded md:text-xl active:bg-blue-800"
						onClick={calculateResults}
					>
						محاسبه
					</button>
					<div className="w-full p-3 text-sm border-2 border-blue-300 rounded flex flex-wrap justify-between gap-4">
						<p>
							مجموعه نمرات:{" "}
							<span>{result.score > 0 ? result.score : "--"}</span>
						</p>
						<p>
							مجموعه کردیت ها:{" "}
							<span>{result.credits > 0 ? result.credits : "--"}</span>
						</p>
						<p>
							فیصدی:{" "}
							<span>{result.percentage > 0 ? result.percentage : "--"}</span>
						</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
