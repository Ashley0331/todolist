import { Switch, Route, BrowserRouter } from '@modern-js/runtime/router';
import { memo } from 'react';
import TodoList from './pages/TodoList';
import './App.css';

const App = memo(() => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <TodoList />
      </Route>
    </Switch>
  </BrowserRouter>
));

export default App;
