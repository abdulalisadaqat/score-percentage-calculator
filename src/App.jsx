import { useState } from "react";
import Row from "./components/Row";
import "./App.css";
function App() {
	const [subjects, setSubjects] = useState([
		{ id: 1, score: 0, credits: 0, total: 0 },
		{ id: 2, score: 0, credits: 0, total: 0 },
		{ id: 3, score: 0, credits: 0, total: 0 },
		{ id: 4, score: 0, credits: 0, total: 0 },
		{ id: 5, score: 0, credits: 0, total: 0 },
		{ id: 6, score: 0, credits: 0, total: 0 },
		{ id: 7, score: 0, credits: 0, total: 0 },
		{ id: 8, score: 0, credits: 0, total: 0 },
		{ id: 9, score: 0, credits: 0, total: 0 },
		{ id: 10, score: 0, credits: 0, total: 0 },
	]);
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
	};

	return (
		<>
			<main className="bg-gray-200/60 min-w-screen min-h-screen flex items-center justify-center py-8 max-sm:px-3">
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
							<Row id={1} subjects={subjects} setSubjects={setSubjects} />
							<Row id={2} subjects={subjects} setSubjects={setSubjects} />
							<Row id={3} subjects={subjects} setSubjects={setSubjects} />
							<Row id={4} subjects={subjects} setSubjects={setSubjects} />
							<Row id={5} subjects={subjects} setSubjects={setSubjects} />
							<Row id={6} subjects={subjects} setSubjects={setSubjects} />
							<Row id={7} subjects={subjects} setSubjects={setSubjects} />
							<Row id={8} subjects={subjects} setSubjects={setSubjects} />
							<Row id={9} subjects={subjects} setSubjects={setSubjects} />
							<Row id={10} subjects={subjects} setSubjects={setSubjects} />
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
