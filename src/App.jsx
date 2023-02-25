import { useState, useEffect } from "react";
import Tasks from "./Tasks";
import Form from "./Form";
import "./tailwind.css";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return unsubscribe;
  }, []);

  const style = {
    bg: `bg-yellow-light h-screen w-full py-[50px] text-white font-shantell overflow-scroll`,
    container: `bg-blue max-w-[600px] w-[90%] mx-auto p-[50px] rounded-md sm:p-[25px] sm:w-[95%]`,
    title: `text-4xl text-center mb-5 sm:text-2xl`,
    text: `mt-[50px] text-2xl sm:text-[18px]`,
    count: `text-center sm:text-[16px]`,
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.title}>Task Manager</h1>
        <Form />
        {tasks.length > 0 && <p className={style.text}>Your tasks</p>}
        <ul>
          <Tasks tasks={tasks} />
        </ul>
        {tasks.length > 0 && (
          <p className={style.count}>You have {tasks.length} task(s) </p>
        )}
      </div>
    </div>
  );
};

export default App;
