import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, Provider } from 'react-native-paper';
import Constants from 'expo-constants';

import TaskItem from './TaskItem'
import ArchivedDay from './ArchivedDay'
import Todo from './Todo'
import Progress from './Progress'
import Nav from './Nav'

function testingCode() {
  return (
    <View style={styles.container}>
      {/* <TaskItem task={task} /> */}
      {/* <ArchivedDay tasks={tasks} /> */}
    </View>);
}

export default function App() {
  const task = {
    name: 'Finish Project',
    deadline: new Date('2023-05-01').toLocaleDateString(),
    completed: false,
    rating: 4
  };

  const tasks = [
    { name: 'Task 1', deadline: 'April 20, 2023', completed: true },
    { name: 'Task 2', deadline: 'April 22, 2023', completed: false },
    { name: 'Task 3', deadline: 'April 21, 2023', completed: false },
    { name: 'Task 4', deadline: 'April 22, 2023', completed: true }
  ];

  const pastLists = [
    { date: '3/31/2023'},
    { date: '3/30/2023'},
    { date: '3/28/2023'},
    { date: '3/27/2023'}
  ];

  return (
    <Provider theme={MD3LightTheme}>
      <View style={styles.nav}>
        <Nav Todo={<Todo tasks={tasks}  />} Progress={<Progress pastLists={pastLists}  />}  />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey'
  }
});
