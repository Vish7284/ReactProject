import AddingNote from "./Component/AddingNote";
import "./index.css";
import Display from "./Component/Display";
import { useContext, useState } from "react";
import { NoteContext } from "./store/note-context";

function App() {
  const [search ,setSearch] = useState("")
  const ctx = useContext(NoteContext)
  const searchHandler =(e)=>{
    e.preventDefault();
    setSearch(e.target.value)
  }
    const filteredData = ctx.items.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
 
  return (
    <div className="flex justify-center items-center bg-slate-100">
      <div>
        <h1 className="font-bold"> Notes...</h1>
        <h2 className="font-bold text-rose-300">
          Total Notes ---{ctx.items.length}
        </h2>
        <h2 className="font-bold text-indigo-200">
          Showing ----{filteredData.length}
        </h2>
        <div className="bg-green-100 m-6">
          <label htmlFor="search" className="pr-4">Search</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={searchHandler}
            className=" rounded-xl p-4"
          />
        </div>
        <button className="bg-cyan-400 rounded-xl p-4" onClick={ctx.showForm}>
          Add New Note
        </button>
        {ctx.show && <AddingNote />}
        <Display props={filteredData} />
      </div>
    </div>
  );
}

export default App;
