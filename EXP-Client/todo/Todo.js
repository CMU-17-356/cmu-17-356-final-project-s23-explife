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

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
};

function Graph({ today, todos }) {
  const theme = useTheme();

  const [completedCount, setCompletedCount] = React.useState(2);

  // TODO: update completed count
  // React.useEffect(() => {
  //   let count = 0;
  //   todos.forEach((todo) => todo.completed ? count + 1 : count);
  //   setCompletedCount(count);
  // }, [todos]);

  return (
    <View style={styles.graph}>
      <ProgressCircle
        size={80}
        progress={completedCount / todos.length}
        showsText={true}
        formatText={() => `${Math.round((completedCount / todos.length) * 100)}%`}
        style={styles.progressCircle}
        color={theme.colors.primary}
      >
        <Text style={styles.progressText}>{formatDate(today.date)}</Text>
      </ProgressCircle>
    </View>
  );
}

function HeaderText({ todos }) {
  return (
    <View style={styles.headerText}>
      <Text style={{ fontSize: 20 }}>Today you have...</Text>
      {todos.map(({ name, deadline, priority, completed }, index) =>
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

export default function Todo({ today, todos }) {
  const [viewingTodo, setViewingTodo] = React.useState(null);

  console.log(today);
  console.log(todos);

  return (
    <Provider>
      {viewingTodo == null && <TodoPage today={today} todos={todos} setViewingTodo={setViewingTodo} />}
      {viewingTodo != null && <TodoItem today={today} todo={viewingTodo} setViewingTodo={setViewingTodo} />}
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
