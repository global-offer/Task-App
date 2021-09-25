import React from "react";
import TaskItem from "./TaskItem";
import { TTask } from "../types";
type Props = {
  tasks: TTask[];
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
};
const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  const handleDone = (task: TTask) => {
    setTasks(
      (prev) =>
        //prev?
        prev.map((t) => (t.id === task.id ? { ...task, done: !task.done } : t)) //?
    );
  };
  const handleDelete = (task: TTask) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id)); //?
  };
  return (
    <div className="inner">
              
      {tasks.length <= 0 ? (
        "登録されたTODOはありません。"
      ) : (
        <ul className="task-list">
                      
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ))}
                      
        </ul>
      )}
              
    </div>
  );
};
export default TaskList;
