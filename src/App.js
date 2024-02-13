
import './App.css';
import AddToDo from './Components/addTodo';
import TodoListView from './Components/todoList';


function App() {
  return (
    <div className="App">
     
      <h1>TO DO List</h1>
      <AddToDo/>
      <TodoListView/>
    </div>
  );
}

export default App;
