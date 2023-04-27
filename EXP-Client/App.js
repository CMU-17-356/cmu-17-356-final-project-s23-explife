import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, Provider } from 'react-native-paper';
import Constants from 'expo-constants';
import axios from 'axios';

import TaskItem from './todo/TaskList';
import ArchivedDay from './progress/ArchivedDay';
import Todo from './todo/Todo';
import Nav from './components/Nav';

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
    { name: 'Task 1', deadline: '2023-04-20T00:00:00.000Z', priority: 4, completed: true },
    { name: 'Task 2', deadline: '2023-04-21T00:00:00.000Z', priority: 3, completed: false },
    { name: 'Task 3', deadline: '2023-04-22T00:00:00.000Z', priority: 2, completed: false },
    { name: 'Task 4', deadline: '2023-04-23T00:00:00.000Z', priority: 1, completed: true }
  ];

  const [todayList, setTodayList] = React.useState([]);

  let instance = axios.create({
    baseURL: "https://explife-backend.fly.dev"
  });

  instance
    .get("/lists/:id")
    .then((res) => {
      setTodayList(res.data)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <Provider theme={MD3LightTheme}>
      <View style={styles.nav}>
        <Nav
          Todo={<Todo tasks={tasks} />}
          Progress={<ArchivedDay tasks={tasks} />}
        />
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
    backgroundColor: '#D9D9D9'
  }
});
