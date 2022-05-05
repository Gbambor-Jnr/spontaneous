import { useState, useRef } from "react";

const TodoForm = (props) => {
  const nameRef = useRef("");
  const activityRef = useRef("");
  const beerRef = useRef();

  const submitChangeHandler = (e) => {
    e.preventDefault();
    const enteredNAme = nameRef.current.value;
    const enteredActivity = activityRef.current.value;
    const enteredBeer = beerRef.current.value;
    props.onSubmitNow({
      id: Math.random(),
      name: enteredNAme,
      activity: enteredActivity,
      beer: enteredBeer,
    });
  };
  return (
    <form onSubmit={submitChangeHandler}>
      <input id="name" type="text" ref={nameRef} />
      <label htmlFor="name">Name</label>

      <input id="todo" type="text" ref={activityRef} />
      <label htmlFor="todo">Activity </label>

      <input id="beer" type="number" ref={beerRef} />
      <label htmlFor="beer">Beer </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
