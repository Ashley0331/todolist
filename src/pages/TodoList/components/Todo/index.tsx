import { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { TodoItem } from '../../../../model/todo';

interface Props {
  todo: TodoItem;
  handleDelTodo: (todo: TodoItem) => void;
  completeTodo: (todo: TodoItem) => void;
  EditTodo: (todo: TodoItem, text: string) => void;
}
const Todo: FC<Props> = memo(props => {
  const { todo, handleDelTodo, completeTodo, EditTodo } = props;
  const [text, setText] = useState(todo.content);
  const [editing, setEditing] = useState(false);

  const handleTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [],
  );
  const handleEditingChange = useCallback(() => {
    setEditing(true);
  }, []);
  const handleBlur = (todo: TodoItem) => {
    EditTodo(todo, text);
    setEditing(false);
  };
  if (editing) {
    return (
      <li key={todo.id}>
        <input
          type="text"
          className="edit"
          autoFocus
          value={text}
          onChange={handleTextChange}
          onBlur={() => {
            handleBlur(todo);
          }}
        />
      </li>
    );
  } else {
    return (
      <li key={todo.id}>
        <div className={todo.state ? 'front completed' : 'front'}>
          <button
            className="complete"
            onClick={() => {
              completeTodo(todo);
            }}
          >
            {todo.state ? <AiOutlineCheck /> : ''}
          </button>
          <label className="content" onDoubleClick={handleEditingChange}>
            {todo.content}
          </label>
          <div className="del">
            <button onClick={() => handleDelTodo(todo)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </li>
    );
  }
});
export default Todo;
