import List from "components/List";
import { useRef, useState } from "react";

export type Status = "start" | "progress" | "finished";

export interface Todo {
  priority: number;
  status: Status;
  title: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const moveTodo = (todo: Todo, newStatus: Status) => {
    setTodos((prev) => {
      return prev.map((t) => t === todo ? { ...t, status: newStatus } : t)
    })
  }

  const upDown = (move: "up" | "down", todo: Todo) => {
    setTodos((prev) => {
      return prev.map((t) => t === todo ? { ...t, priority: move === "up" ? todo.priority + 1 : todo.priority - 1 } : t)
    })
  }

  const addTodo = () => {
    if (!inputRef.current)
      return;

    const newTodo: Todo = {
      status: "start",
      priority: 0,
      title: inputRef.current.value
    }

    setTodos((prev) => [...prev, newTodo])

    inputRef.current.value = "";
  }

  return <main className="text-white grid p-4 items-start grid-rows-[auto_1fr]">
    <div className="flex gap-4 mb-10 justify-self-center">
      <input type="text" className="text-blue-900 rounded-md" ref={inputRef} />
      <button className="bg-teal-400/20 px-5 rounded-md hover:bg-teal-400/70 transition-colors"
        onClick={addTodo}
      >Add</button>
    </div>
    <div className="grid grid-cols-3 w-full gap-4 h-[80%]">
      <List todos={todos} header="Backlog" board="start" moveTodo={moveTodo} upDown={upDown} />
      <List todos={todos} header="In Progress" board="progress" moveTodo={moveTodo} upDown={upDown} />
      <List todos={todos} header="Done" board="finished" moveTodo={moveTodo} upDown={upDown} />
    </div>
  </main>;
}

export default App;
