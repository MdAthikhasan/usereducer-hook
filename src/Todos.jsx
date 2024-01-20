// import React from "react";
import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (arry, action) => {
  switch (action.type) {
    case "complete":
      let result = arry.map((TODO) => {
        if (TODO.id === action.id) {
          return { ...TODO, complete: !TODO.complete };
        } else {
          return TODO;
        }
      });
      return result;
    default:
      return arry;
  }
};

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialTodos);

  const todohandler = (id) => {
    dispatch({ type: "complete", id: id });
  };
  return (
    <>
      <div>
        {state.map((todo) => (
          <div key={todo.id}>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => todohandler(todo.id)}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

// const Todos = () => {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   return (
//     <>
//       <h2>Hello i am todo</h2>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Todos;


// const todoReducer = (todos, action) => {
//   switch (action.type) {
//     case "add":
//       return [...todos, { text: action.text, completed: false }];
//     case "toggle":
//       return todos.map((todo, index) =>
//         index === action.index ? { ...todo, completed: !todo.completed } : todo
//       );
//     default:
//       return todos;
//   }
// };