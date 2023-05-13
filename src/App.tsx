
import "./App.scss";
import ListTodo from "./components/ListTodo";

function App() {

  return (
    <div className="container">
      <h2 className="total-title">My tasks</h2>
      <ListTodo 
      />
    </div>
  );
}

export default App;