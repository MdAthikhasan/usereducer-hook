// import React from "react";
// import { useReducer } from "react";

// const reduce = (state, action) => {
//     // const arry = action.arry
//     // for (let a = 0; a < arry.length; a++){
//     //     console.log(arry[0])
//     // }
    
//   switch (action.type) {
//       case "increment":
//           return state.counter + action.number;
//     //       {
//     //     ...state,
//     //     counter: state.counter + action.number,
//     //   };

//       case "dicrement":
//           return state.counter - action.number;
//     //       {
//     //     ...state,
//     //     counter: state.counter - action.number,
//     //   };
//     // case "increment2":
//     //   return {
//     //     ...state,
//     //     counter2: state.counter2 + action.number,
//     //   };

//     // case "dicrement2":
//     //   return {
//     //     ...state,
//     //     counter2: state.counter2 - action.number,
//     //   };

//     default:
//       return state;
//   }
// };

// const initialvalue = {
//   counter: 0,
// //   counter2: 1,
// };

// const UseReduce = () => {
//   const [stat, dispath] = useReducer(reduce, initialvalue);
//  console.log(stat)
//   return (
//     <div>
//       <h1>{stat.counter}</h1>
//       <button
//         onClick={() =>
//           dispath({ type: 'increment' , number: 5 })
//         }
//       >
//         increment
//       </button>
//       <button
//         onClick={() =>
//           dispath({  type: 'dicrement' , number: 2 })
//         }
//       >
//         dicrement
//       </button>
//       {/* <h1>{stat.counter2}</h1>
//       <button onClick={() => dispath({ type: "increment2", number: 5 })}>
//         increment
//       </button>
//       <button onClick={() => dispath({ type: "dicrement2", number: 2 })}>
//         dicrement
//       </button> */}
//     </div>
//   );
// };

// export default UseReduce;
