import { Status, Todo } from 'app/app'

interface Props {
  todos: Todo[];
  board: Status;
  header: string;
  moveTodo: (todo: Todo, newStatus: Status) => void;
  upDown: (move: "up" | "down", todo: Todo) => void;
}

const config = {
  start: {
    next: "progress",
    prev: null
  },
  progress: {
    next: "finished",
    prev: "start"
  },
  finished: {
    next: null,
    prev: "progress"
  },
}

const List = ({ todos, board, header, moveTodo, upDown }: Props) => {
  return (
    <div className='border-teal-400 border rounded-md'>
      <h2 className='text-center mb-5 text-xl tracking-wider'>{header}</h2>
      <ul className="p-6">
        {todos.filter((todo) => todo.status === board)
          .sort((a, b) => a.priority > b.priority ? -1 : 1)
          .map((todo) => (
            <li className='flex gap-2 items-center mb-2' key={todo.title}>
              <p>{todo.title} </p>
              {
                config[board].prev &&
                <button
                  onClick={() => moveTodo(todo, config[board].prev as Status)}
                  className="bg-teal-400/20 px-1 rounded-md hover:bg-teal-400/70 transition-colors">
                  Prev
                </button>
              }
              {
                config[board].next &&
                <button
                  onClick={() => moveTodo(todo, config[board].next as Status)}
                  className="bg-teal-400/20 px-1 rounded-md hover:bg-teal-400/70 transition-colors">
                  Next
                </button>
              }
              <button
                onClick={() => upDown("up", todo)}
                className="bg-teal-400/20 px-1 rounded-md hover:bg-teal-400/70 transition-colors">
                Up
              </button>
              <button
                onClick={() => upDown("down", todo)}
                className="bg-teal-400/20 px-1 rounded-md hover:bg-teal-400/70 transition-colors">
                Down
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default List
