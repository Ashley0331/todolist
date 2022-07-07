import { Switch, Route } from '@modern-js/runtime/router';
import { memo } from 'react';
import TodoList from './pages/TodoList';
import './App.css';

const App = memo(() => (
  <Switch>
    <Route exact={true} path="/">
      <TodoList listState="All" />
    </Route>
    <Route exact={true} path="/Active">
      <TodoList listState="Active" />
    </Route>
    <Route exact={true} path="/Completed">
      <TodoList listState="Completed" />
    </Route>
  </Switch>
));

export default App;
