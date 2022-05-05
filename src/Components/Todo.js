import TodoForm from "./TodoForm";
import { useState } from "react";

const DUMMY = [
  { id: "q1", name: "Gbambor", activity: "Football", beer: 5 },
  { id: "q2", name: "Ebuka", activity: "Sells", beer: 1 },
  { id: "q3", name: " Cornelius", activity: "BasketBall", beer: 4 },
  { id: "q4", name: "ElenaMoon", activity: "DrinkBeer", beer: 23 },
];
const Todo = () => {
  const [todo, setTodo] = useState(DUMMY);

  const submitNowHandler = (item) => {
    setTodo((prevState) => {
      return [item, ...prevState];
    });
  };

  const clickHandler = (id) => {
    const newtodo = todo.filter((item) => item.id !== id);
    setTodo(newtodo);
  };

  const beerHandler = (item, id) => {
    // setTodo(
    //   todo.map((item) => {
    //     if (item.id === id) {
    //       return [{ ...item }, { beer: item.beer + diff }];
    //     }
    //   })
    // );
    if (todo.id === id) {
      setTodo((prevState) => {
        return [...prevState, { ...item, beer: item.beer + 1 }];
      });
    }
  };

  return (
    <div>
      <TodoForm onSubmitNow={submitNowHandler} />
      {todo.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.activity}</p>
          <p>{item.beer}</p>
          <button onClick={clickHandler.bind(null, item.id)}>delete</button>
          <br />

          {console.log(item.beer)}
          <button onClick={beerHandler.bind(null, item, item.id)}>beer+</button>
        </li>
      ))}
    </div>
  );
};

export default Todo;
