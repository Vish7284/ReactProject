import { useContext } from "react";
import { NoteContext } from "../store/note-context";


const Display =(props)=>{

    const ctx = useContext(NoteContext)
    return(
        <div>
            {props.props.map((data,index)=>{
                return <li key={index}>{data.title} {data.desc} <button className="bg-cyan-400 rounded-lg" onClick={()=> ctx.removeNote(data)}>Delete</button></li>
            })}

        </div>
    )
}

export default Display;