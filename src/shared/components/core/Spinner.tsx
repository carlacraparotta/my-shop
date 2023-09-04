import { useState, useEffect } from "react";

export function Spinner() {

    const [show, setShow] = useState<boolean>(false);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
    
      return () => clearTimeout(timer);
    }, [setShow])
    

    return (
        show ? 
        <div className="flex w-full justify-center my-4 ">
            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </div> : 
        null
    )
}