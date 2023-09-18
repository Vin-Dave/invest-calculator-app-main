import "./App.css";
import { Button } from "./components/Button";
import { AppComponent } from "./components/AppComponent";
import { useState } from "react";
import { task as tasksOfSource } from "./source/task";

function App() {
	const [tasks, setTasks] = useState(tasksOfSource);
	const handleDeleteTasks = (index) => {
		const newArray = [...tasks];
		newArray.splice(index, 1);
		setTasks(newArray);
	};
	return (
		<div>
			<ul>
				{tasks.map((task, index) => {
					return (
						<>
							<li key={index}>{task.title}</li>
							<button onClick={() => handleDeleteTasks(index)}>
								Completed
							</button>
						</>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
