import React,{createContext} from "react"

export const NoteContext = React.createContext({
    items:[],
    addData:(data)=>{},
    showForm:()=>{},
    removeNote:()=>{},
})