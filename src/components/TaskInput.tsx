import React, { useState } from "react";
import { TTask } from "../types";
type Props = {
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>; //この型の意味は？
  tasks: TTask[];
};
const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [count, setCount] = useState<number>(tasks.length + 1);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //型で<>これはどんな意味？
    setInputTitle(e.target.value);
  };
  const handleSubmit = () => {
    setCount(count + 1);
    const newTask: TTask = {
      id: count,
      title: inputTitle,
      done: false,
    };
    setTasks([newTask, ...tasks]); //...の意味は？
    setInputTitle(""); //この処理はタイトルを入力するもの？
  };
  return (
    <div>
                  
      <div className="inputForm">
                        
        <div className="inner">
                              
          <input
            type="text"
            className="input"
            value={inputTitle}
            onChange={handleInputChange}
          />
                              
          <button onClick={handleSubmit} className="btn is-primary">
            追加
          </button>
                          
        </div>
                    
      </div>
              
    </div>
  );
};
export default TaskInput;
