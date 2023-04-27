import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, Provider } from 'react-native-paper';
import Constants from 'expo-constants';

import Todo from './todo/Todo'
import Stories from './stories/Stories'
import Progress from './progress/Progress'
import TaskItem from './progress/TaskItem'
import ArchivedDay from './progress/ArchivedDay'

import Nav from './components/Nav'
import axios from 'axios';


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

  const stories = [
    { name: "Dish Monster Story", date: "April 22 2023", completed: true },
    { name: "Room Spider Story", date: "April 30 2023", completed: true },
    { name: "Vacuum Ghost Story", date: "May 17 2023", completed: true },
    { name: "Running Shoes Story", date: "August 34 2023", completed: true }
  ];

  const pastLists = [
    { date: '3/31/2023'},
    { date: '3/30/2023'},
    { date: '3/28/2023'},
    { date: '3/27/2023'}
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
          Stories={<Stories stories={stories} />}
          Progress={<Progress pastLists={pastLists} />}
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
