import { FC, memo } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import Todo from '../Todo';
import { TodoItem } from '../../../../model/todo';

interface Props {
  todos: Array<TodoItem>;
  handleDelTodo: (todo: TodoItem) => void;
  completeAllTodo: () => void;
  completeTodo: (todo: TodoItem) => void;
  EditTodo: (todo: TodoItem, text: string) => void;
}
const Form: FC<Props> = memo(props => {
  const { todos, handleDelTodo, completeAllTodo, completeTodo, EditTodo } =
    props;
  return (
    <div className="todos-form">
      <button className="complete-all" onClick={completeAllTodo}>
        <AiOutlineCheck />
      </button>
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelTodo={handleDelTodo}
            completeTodo={completeTodo}
            EditTodo={EditTodo}
          />
        ))}
      </ul>
    </div>
  );
});
export default Form;
