import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { TTask } from "./types";
import { TestTypeData } from "./testData";
import "./App.css";

const initialStates: TTask[] = TestTypeData;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TTask[]>(initialStates);

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  );
};
export default App;
