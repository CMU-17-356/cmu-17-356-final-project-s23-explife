import * as React from 'react';
import { Provider, useTheme, Appbar } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import AddTodoMenu from './AddTodoMenu';
import TodoList from './TodoList';
import TodoItem from '../progress/TodoItem.js';
import * as utils from '../utils/utils';

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
};

function Graph({ today, todos }) {
  const theme = useTheme();

  const [completedCount, setCompletedCount] = React.useState(0);

  React.useEffect(() => {
    let count = 0;
    today.items.forEach((todo) => {
      count = todo.completed ? count + 1 : count
    });
    setCompletedCount(count);
  }, []);

  return (
    <View style={styles.graph}>
      <ProgressCircle
        size={80}
        progress={completedCount / today.items.length}
        showsText={true}
        formatText={() => `${Math.round((completedCount / today.items.length)*100)}%`}
        style={styles.progressCircle}
        color={theme.colors.primary}
      >
        <Text>{formatDate(today.date)}</Text>
      </ProgressCircle>
    </View>
  );
}

function HeaderText({ todos }) {
  return (
    <View style={styles.headerText}>
      <Text style={{ fontSize: 20 }}>Today you have...</Text>
      {todos.map(({ name, deadline, priority, completed }, index) =>
        !completed &&
        <Text style={{ fontSize: 15 }} key={index}>{name}</Text>
      )}
    </View>
  );
}

function TodoPage({ today, todos, setViewingTodo }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  return (
    <View>
      <Appbar.Header mode="large" elevated>
        <View style={styles.progress}>
          <Graph today={today} todos={todos} />
          <HeaderText todos={todos} />
        </View>
      </Appbar.Header>
      <TodoList today={today} todos={todos} setIsPanelActive={setIsPanelActive} setViewingTodo={setViewingTodo} />
      <AddTodoMenu today={today} isPanelActive={isPanelActive} setIsPanelActive={setIsPanelActive} />
    </View>
  );
}

function convertToToday(todos) {
  const todayDate = new Date();
  let todayTodos;
  todos.forEach((todo, index) => {
    if (utils.sameDay(new Date(todo.date), todayDate)) {
      todayTodos = todo;
    };
  });
  return todayTodos;
};

export default function Todo({ today, todos, setTodos }) {
  const [viewingTodo, setViewingTodo] = React.useState(null);
  
  utils.getAllTodos().then((res) => {
    let todayTodos = convertToToday(res.data);
    today = todayTodos;
  });

  return (
    <Provider>
      {viewingTodo == null && <TodoPage today={today} todos={todos} setViewingTodo={setViewingTodo} setTodos={setTodos} />}
      {viewingTodo != null && <TodoItem today={today} todo={viewingTodo} setViewingTodo={setViewingTodo} setTodos={setTodos} />}
    </Provider>
  );
}

const styles = StyleSheet.create({
  progress: {
    flexDirection: 'row',
  },
  graph: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  headerText: {
    justifyContent: 'center',
    width: 225
  },
  menu: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#00ff00',
  }
});
