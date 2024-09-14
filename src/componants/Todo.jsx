import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TOGGLECHECKED } from "../Redux/actions";
import { DeleteTask, GetTasks, SetTasks, UpdateTask } from "../API/tasks";

export default function TODOLIST() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("Loading...");

  const dispatch = useDispatch();

  // Fetch tasks on component mount

  const fetchData = async () => {
    try {
      const response = await GetTasks();
      console.log("Fetched response:", response);
      console.log(todos);

      setTodos(response.data); 
      setMessage(""); 
      if (!response.ok) {
        setMessage('No items');
      }
    } catch (error) {
      setMessage("Connection issue!");
      console.error("Error fetching todo list:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeAddTodo = (e) => {
    setTodoValue(e.target.value);
  };

  const handleClick = async () => {
    if (todoValue.trim() !== "") {
      await SetTasks(todoValue);
      setTodoValue("");
      await fetchData();
    } else {
      console.error("Field should not be empty");
    }
  };

  const handleClickDelete = async (id) => {
    await DeleteTask(id);
    await fetchData();
  };

  const handleCheckedUpdate = async (id, event) => {
    const checked = event.target.checked;
    await UpdateTask(id, checked);
    dispatch(TOGGLECHECKED(id));
    await fetchData();
  };

  const displayDefaultList = () => {
    return todos.map((todo) => (
      <div
        key={todo.id}
        className={`bg-${
          todo.isCompleted ? "red-50" : "blue-100"
        } lg:w-10/12 w-full flex justify-between items-center rounded shadow-md m-auto my-4 opacity-${
          todo.isCompleted ? "75" : "100"
        } border-${todo.isCompleted ? "red-400" : "blue-300"}`}
      >
        <div className="w-9/12 p-3">
          <p
            className={`text-xl py-1 ${
              todo.isCompleted ? "text-red-400 line-through" : ""
            }`}
          >
            {todo.item}
          </p>
          <span className="text-gray-400 text-sm">
            {todo.updated_at.slice(0, 10)} || {todo.updated_at.slice(11, 16)}
          </span>
        </div>
        {todo.isCompleted ? (
          <div className="w-2/12 flex justify-end">
            <button
              onClick={() => handleClickDelete(todo.id)}
              className="bg-red-300 text-white p-2 hover:bg-red-400 transition-all duration-500 hover:scale-105 rounded"
            >
              Delete
            </button>
          </div>
        ) : ''}
        <div className="w-1/12 text-right p-3">
          <input
            onChange={(event) => handleCheckedUpdate(todo.id, event)}
            checked={todo.isCompleted}
            type="checkbox"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="font-bold w-full h-auto p-4 flex flex-col items-center mt-4">
      <div className="w-10/12 flex flex-col items-center p-4 border-b-2 border-gray-400">
        <div className="bg-slate-100 lg:w-5/12 w-11/12 text-center p-4 mb-4 border border-blue-200">
          <h1 className="text-xl font-bold text-blue-500">Daily Todo</h1>
        </div>
        <div className="w-full lg:w-8/12 flex justify-between p-4">
          <input
            onChange={handleChangeAddTodo}
            className="w-9/12 mr-1 p-3 border-2 outline-blue-200"
            type="text"
            id="inputTodo"
            placeholder="Typing..."
            value={todoValue}
          />
          <button
            onClick={handleClick}
            className="w-3/12 bg-blue-200 text-lg font-bold text-blue-500 rounded hover:bg-blue-300 transition-all"
          >
            ADD
          </button>
        </div>
      </div>

      <div className="mt-4 bg-gray-100 lg:w-10/12 w-full p-3 flex-col justify-center h-auto">
        {todos.length > 0 ? (
          displayDefaultList()
        ) : (
          <div className="tracking-widest font-light text-xl text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
