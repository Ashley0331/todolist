import {
  KeyboardEvent,
  ChangeEvent,
  FC,
  useEffect,
  useState,
  useCallback,
  memo,
} from 'react';
import { useHistory, Link } from '@modern-js/runtime/router';
import Form from './components/Form';
import { TodoItem } from '@/model/todo';

const TodoList: FC = memo(() => {
  const history = useHistory();
  const [listState, setListState] = useState('All');
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    { id: '1', content: '吃饭', state: false },
    { id: '2', content: '睡觉', state: true },
  ]);

  const handleNewTodoChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setNewTodo(event.target.value);
    },
    [],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== 'Enter') {
      return;
    }
    event.preventDefault();
    const tmp = newTodo;
    if (tmp) {
      setTodos([
        ...todos,
        { id: Math.random().toString(16), content: tmp, state: false },
      ]);
      setNewTodo('');
    }
  };

  const handleDelTodo = (todo: TodoItem) => {
    const tmp = todos.filter(val => {
      return val !== todo;
    });
    setTodos(tmp);
  };

  const completeAllTodo = () => {
    const state =
      todos.filter(todo => {
        return todo.state === false;
      }).length > 0;
    const tmp = todos.map(todo => {
      return {
        ...todo,
        state,
      };
    });
    setTodos(tmp);
  };

  const completeTodo = (todo: TodoItem) => {
    setTodos(
      todos.map(tmp => {
        return tmp === todo ? { ...todo, state: !tmp.state } : tmp;
      }),
    );
  };

  const EditTodo = (todo: TodoItem, text: string) => {
    setTodos(
      todos.map(tmp => {
        return tmp === todo ? { ...todo, content: text } : tmp;
      }),
    );
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.todos ? localStorage.todos : []);
    setTodos(list);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  let list = todos;
  useEffect(() => {
    history.listen(currentLocation => {
      setListState(currentLocation.pathname);
    });
  }, [history]);
  if (listState.includes('Active')) {
    list = todos.filter(todo => {
      return todo.state === false;
    });
  } else if (listState.includes('Completed')) {
    list = todos.filter(todo => {
      return todo.state === true;
    });
  }
  return (
    <div className={todos.length > 0 ? 'todos-box' : 'none-todo todos-box'}>
      <header className="new-todo">
        <h1>todos</h1>
        <input
          type="text"
          onChange={handleNewTodoChange}
          value={newTodo}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
        />
      </header>
      <Form
        EditTodo={EditTodo}
        todos={list}
        handleDelTodo={handleDelTodo}
        completeAllTodo={completeAllTodo}
        completeTodo={completeTodo}
      />
      <footer className="todos-footer">
        <span>
          {`${
            todos.filter(todo => {
              return todo.state === false;
            }).length
          } `}
          Items left
        </span>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/Active">Active</Link>
          </li>
          <li>
            <Link to="/Completed">Completed</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
});

export default TodoList;
