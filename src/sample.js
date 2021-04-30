import React from "react";
//import "./TodoApp.css";

export default function Sample() {
  const [value, setvalue] = React.useState("");
  const [save, setsave] = React.useState([]);

  const handleChange = e => {
    setvalue(e.target.value);
  };

  const addInput = () => {
    setsave([
      ...save,
      {
        id: save.length + 1,
        text: value,
        completed: false
      }
    ]);
  };

  const removeName = valueId => {
    const updatedvalue = save.filter(value => value.id !== valueId);
    setsave(updatedvalue);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (value === "") return;
    addInput();
    setvalue("");
  };



  const toggleValue = valueId => {
    const updatedvalue = save.map(value => {
      return value.id === valueId
        ? { ...value, completed: !value.completed }
        : value;
    });
    setsave(updatedvalue);
  };

  return (
    <div  >
      <div className="container max-w-md mx-auto flex p-6 bg-gray-100 mt-10  rounded-sm shadow-xl" >
        <form onSubmit={onSubmit}>
          <label htmlFor="value">Enter name</label>
          <br />
          <input
            id="value"
            className="todo-input"
            onChange={handleChange}
            value={value}
          />
          <button type="submit" className="add-btn">
            Signup
        </button>
        </form>
      </div>

      <div className="max-w-md mx-auto flex  p-2 bg-gray-100 mt-10  rounded-sm shadow-xl">
        <ul>
          {save.map(value => (
            <li key={value.id}>

              <div>
                <span
                  className={value.completed ? "value-completed" : undefined}
                  onClick={() => toggleValue(value.id)}>
                  {value.text}
                </span> 

                <button className="delete-btn " onClick={() => removeName(value.id)}>
                  Remove
            </button>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}