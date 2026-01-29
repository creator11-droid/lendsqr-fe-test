import React, {useEffect, useRef} from 'react'
import "./css/index.css"
type ChildProps ={
    open: boolean;
    onClose: ()=>void;
    trigger:React.ReactNode;
    children:React.ReactNode;
    
}

const Dropdown = ({open, onClose,trigger,children}:ChildProps) => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(()=>{
    const HandleClick = (e:MouseEvent)=>{
        if(ref.current && !ref.current.contains(e.target as Node)){
            onClose();
        }
    };
    if(open){
        document.addEventListener("mousedown", HandleClick)
    }
    return()=>{
        document.removeEventListener("mousedown", HandleClick)
    }
   },[open, onClose])
  return (
    <div ref={ref} className='dropdown'>
        {trigger}

        {open && <div className='children' >
            {children}
            </div>}
      
    </div>
  )
}

export default Dropdown