import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { db } from "./firebase";

const Form = () => {
  const style = {
    form: `grid grid-cols-5 items-center w-full gap-5 `,
    input: `bg-transparent text-[18px] w-full col-span-4  py-4 h-[35px] outline-none px-4 rounded-sm border-image sm:text-[16px] sm:py-2`,
    button: `bg-yellow col-span-1 rounded-sm w-[100%]  py-[15px]  mx-auto text-black text-[30px] sm:py-2`,
    add: `mx-auto`,
  };

  const [input, setInput] = useState("");

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  const addInput = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("enter a value");
      return;
    }
    await addDoc(collection(db, "tasks"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  return (
    <form className={style.form}>
      <input
        type="text"
        className={style.input}
        placeholder="Type here (50 chars max.)"
        maxLength={50}
        value={input}
        onChange={handleInputChange}
      />
      <button className={style.button} onClick={addInput}>
        <MdOutlineAdd className={style.add} />
      </button>
    </form>
  );
};

export default Form;
