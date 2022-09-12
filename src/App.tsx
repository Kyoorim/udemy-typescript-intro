import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos.context";
// import Todo from "./models/todo";

function App() {
  //todos.context.tsx로 옮김 ↓↓↓

  // const [todos, setTodos] = useState<Todo[]>([]); // 처음에는 빈배열이지만 항목이 추가되면 반드시 Todo 타입(todo.ts에 정의한 Todo 클래스의 형태)이어야 한다는 뜻
  // // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   // 삭제를 하려면 각 항목의 고유값이 필요하므로 id를 인수르 받음
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== todoId);
  //   });
  // };
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
