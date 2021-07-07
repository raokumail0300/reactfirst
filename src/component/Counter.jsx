import { useState } from "react";


const Counter = () => {


    const [count,setCount] = useState(0);

    function incre() {
         setCount(count+1)
    }

    function decre(){
           setCount(count-1)
    }


    return(
        <div className="count-div">
          <h1>{count}</h1>
          <button onClick={incre}>increment</button>
          <button onClick={decre}>decrement</button>
          <button onClick={()=>{setCount(0)}}>reset</button>
        </div>
    )


}
export default Counter;
















// import { useState } from "react";




// const Counter = () => {
 
//     const [count,setCount] = useState(0)


//     return(
//         <div className="count-div">
//             <h1>{count}</h1>
//             <button onClick={()=>{setCount(count+1)}}>increment</button>
//             <button onClick={()=>{setCount(count-1)}}>decrement</button>
//             <button onClick={()=>{setCount(0)}}>reset</button>
//         </div>
//     )
// }

// export default Counter;
