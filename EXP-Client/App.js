import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, Provider } from 'react-native-paper';
import Constants from 'expo-constants';
import axios from 'axios';

import TaskItem from './TaskItem'
import ArchivedDay from './ArchivedDay'
import Todo from './Todo'
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

  return (
    <Provider theme={MD3LightTheme}>
      <View style={styles.nav}>
        <Nav Todo={<Todo tasks={tasks} />} />
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
