import ReactDom from "react-dom"

const ModalOverLays =(props)=>{
    return <div className="flex justify-center items-center h-screen">{props.children}</div>
}

const portalPlace = document.getElementById("modal");

const Modal =(props)=>{

    return <>
    {ReactDom.createPortal(<ModalOverLays>{props.children}</ModalOverLays>,portalPlace)}
    </>
}

export default Modal;