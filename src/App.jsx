import { useState } from "react";
import "./style.css";

function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form"> 
        <div className="form-row">
          <label>New Item</label>
          <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger">Delete</button>
         
        </li>
      </ul>
    </>

  )
}


export default App;