import { MdOutlineClose } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { db } from "./firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const Tasks = ({ tasks }) => {
  const style = {
    task: `my-3 text-[19px] rounded-sm bg-yellow py-1 px-3 grid grid-cols-4 items-center text-black task-border-image sm:text-[16px]`,
    taskCompleted: `my-3 text-[19px] rounded-sm bg-yellow-dark py-1 px-3 grid grid-cols-4 items-center text-black task-border-image sm:text-[16px]`,
    buttons: `col-span-1 justify-self-end flex items-center gap-2 text-black`,
    btn: `cursor-pointer w-[30px]`,
    text: `col-span-3`,
  };

  const deleteInput = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const toggleComplete = async (task) => {
    await updateDoc(doc(db, "tasks", task.id), {
      completed: !task.completed,
    });
  };

  return (
    <>
      {tasks.map((task) => (
        <li
          className={`${task.completed ? style.taskCompleted : style.task}`}
          key={task.id}
        >
          <p className={style.text}>{task.text}</p>
          <div className={style.buttons}>
            <button
              className={style.btn}
              title="delete task"
              onClick={() => deleteInput(task.id)}
            >
              <MdOutlineClose />
            </button>

            <button
              className={style.btn}
              title="complete task"
              onClick={() => {
                toggleComplete(task);
              }}
            >
              <AiOutlineCheck />
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Tasks;
