import { useState } from "react";

const Counters = () => {

    const [count,setCount] = useState(0);

     
     function incre(){
         setCount(count+1)
     }



    return(
        <div className="div-coun">
            <h1>{count}</h1>
           <button onClick={incre} >increment</button>
           <button onClick={()=>{setCount(count-1)}}>decrement</button>
           <button onClick={()=>{setCount(0)}} >reset</button>
        </div>
    )
}

export default Counters;