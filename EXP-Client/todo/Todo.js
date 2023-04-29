import * as React from 'react';
import { Provider } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import AddTodoMenu from './AddTodoMenu';
import TodoList from './TodoList';
import TodoItem from '../progress/TodoItem.js';

function Graph({ todos }) {
  const completedCount = 2; // todos.reduce(({ name, deadline, completed }, count) => completed ? count + 1 : count, 0);
  return (
    <View style={styles.graph}>
      <ProgressCircle
        size={80}
        progress={completedCount / todos.length}
        showsText={true}
        formatText={() => `${Math.round((completedCount / todos.length) * 100)}%`}
        style={styles.progressCircle}
      >
        <Text style={styles.progressText}>April 1, 2023</Text>
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

function TodoPage({ todos, setViewingTodo }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  return (
    <View style={styles.content}>
      <View style={styles.progress}>
        <Graph todos={todos} />
        <HeaderText todos={todos} />
      </View>
      <TodoList todos={todos} setIsPanelActive={setIsPanelActive} setViewingTodo={setViewingTodo} />
      <AddTodoMenu isPanelActive={isPanelActive} setIsPanelActive={setIsPanelActive} />
    </View>
  );
}

export default function Todo({ todos }) {
  const [viewingTodo, setViewingTodo] = React.useState(null);

  return (
    <Provider>
      {viewingTodo == null && <TodoPage todos={todos} setViewingTodo={ setViewingTodo } />}
      {viewingTodo != null && <TodoItem todo={viewingTodo} setViewingTodo={ setViewingTodo } />}
    </Provider>
  );
}

const styles = StyleSheet.create({
  progress: {
    height: 150,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  graph: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  headerText: {
    paddingLeft: '5%',
    justifyContent: 'center'
  },
  menu: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#00ff00',
  },
  content: {
    height: "100%"
  },
});
