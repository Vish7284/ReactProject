import { NoteContext } from "./note-context";
import React,{useState ,useEffect} from "react";

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState([]);
  const [show ,setShow] = useState(false)


  useEffect(() => {
    // Fetch data from Firebase when the component mounts
    fetch("https://ecommcontactus-default-rtdb.firebaseio.com/AddedNotes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from Firebase");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.notesAdded) {
          setNotes(data.notesAdded);
        }
      })
      .catch((error) => console.log(error));
  }, []); 
  const OnAddNotes = (data) => {
    const updatedNotes =  [...notes, {...data}];
    setNotes(updatedNotes)
    fetch(
      "https://ecommcontactus-default-rtdb.firebaseio.com/AddedNotes.json",
      {
        method: "PUT",
        body: JSON.stringify({
          notesAdded: updatedNotes,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error("Save nhi hua data");
          });
        }
      })
      .then((dat) => {
        console.log(data.notesAdded);
      })
      .catch((err) => console.log(err));
  };

  const setShowHnadler =()=>{
    setShow((prevShow)=> !prevShow)
  }
  const removeNoteHandler =(title)=>{
    const updatedList = notes.filter((data)=> data.title !== title.title )
    setNotes(updatedList)
  }
  const contextValue = {
    items: notes,
    addData: OnAddNotes,
    show:show,
    showForm:setShowHnadler,
    removeNote:removeNoteHandler,
  };
  return (
    <NoteContext.Provider value={contextValue}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteContextProvider;
