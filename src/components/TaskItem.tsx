import React from "react";
import { TTask } from "../types";
type Props = {
  task: TTask;
  handleDone: (task: TTask) => void; //taskだけではダメなのか？
  handleDelete: (task: TTask) => void;
};
const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
  //この型はどこに対して有効？
  return (
    <li className={task.done ? "done" : ""}>
      {/* //TODO: ここの箇所の処理が分からない */}
                  
      <label>
                        
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => handleDone(task)}
          defaultChecked={task.done} //defaultCheckedとは？
        />
                        <span className="checkbox-label">{task.title}</span>
                    
      </label>
                  
      <button
        onClick={() => handleDelete(task)} //この書き方はどうゆう処理？
        className="btn is-delete"
      >
        削除
      </button>
              
    </li>
  );
};
export default TaskItem;
