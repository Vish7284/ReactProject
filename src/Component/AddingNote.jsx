import { useContext, useState } from "react";
import { NoteContext } from "../store/note-context";
import Modal from "./Modal";

const AddingNote = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const ctx = useContext(NoteContext)
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };
  const formSubmitHandler=(e)=>{
    e.preventDefault();
    const obj = {
        title:title,
        desc:desc,
    }
    ctx.addData(obj);
    setTitle("");
    setTitle("")
  
  }
  return (
    <Modal className="flex justify-center items-center max-h-screen bg-emerald-200 rounded-xl mt-6">
      <form className="p-4 " onSubmit={formSubmitHandler}>
        <div className="mb-3 p-4">
          <label htmlFor="title">Note Title:</label>
          <input
            type="text"
            id="title"
            className="bg-slate-200 rounded-full p-4"
            placeholder="Enter Your Note"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="mb-3 p-4 ">
          <label htmlFor="desc">Note Title:</label>
          <textarea
            className="bg-slate-200 rounded-full p-4"
            id="desc"
            placeholder="Note Description"
            value={desc}
            onChange={descChangeHandler}
          />
        </div>
        <div>
          <button className="bg-slate-400 rounded-3xl p-6">Add Note</button>
        </div>
      </form>
      <button className="bg-orange-500 rounded-full p-6" onClick={ctx.showForm}>Close</button>
    </Modal>
  );
};

export default AddingNote;
