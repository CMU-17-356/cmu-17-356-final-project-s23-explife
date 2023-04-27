import * as React from 'react';
import { Provider } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import AddTaskMenu from './AddTaskMenu';
import TaskList from './TaskList';
import TaskItem from '../progress/TaskItem.js';

function Graph({ tasks }) {
  const completedCount = 2; // tasks.reduce(({ name, deadline, completed }, count) => completed ? count + 1 : count, 0);
  return (
    <View style={styles.graph}>
      <ProgressCircle
        size={80}
        progress={completedCount / tasks.length}
        showsText={true}
        formatText={() => `${Math.round((completedCount / tasks.length) * 100)}%`}
        style={styles.progressCircle}
      >
        <Text style={styles.progressText}>April 1, 2023</Text>
      </ProgressCircle>
    </View>
  );
}

function HeaderText({ tasks }) {
  return (
    <View style={styles.headerText}>
      <Text style={{ fontSize: 20 }}>Today you have...</Text>
      {tasks.map(({ name, deadline, completed }) =>
        <Text style={{ fontSize: 15 }} key={name}>{name}</Text>
      )}
    </View>
  );
}

function TodoPage({ tasks, setViewingTask }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  return (
    <View style={styles.content}>
      <View style={styles.progress}>
        <Graph tasks={tasks} />
        <HeaderText tasks={tasks} />
      </View>
      <TaskList tasks={tasks} setIsPanelActive={setIsPanelActive} setViewingTask={setViewingTask} />
      <AddTaskMenu isPanelActive={isPanelActive} setIsPanelActive={setIsPanelActive} />
    </View>
  );
}

export default function Todo({ tasks }) {
  const [viewingTask, setViewingTask] = React.useState(null);

  return (
    <Provider>
      {viewingTask == null && <TodoPage tasks={tasks} setViewingTask={ setViewingTask } />}
      {viewingTask != null && <TaskItem task={viewingTask} setViewingTask={ setViewingTask } />}
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
