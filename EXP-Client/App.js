import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, Provider } from 'react-native-paper';
import Constants from 'expo-constants';

import Todo from './todo/Todo';
import Stories from './stories/Stories';
import Progress from './progress/Progress';
import TaskItem from './progress/TaskItem';
import ArchivedDay from './progress/ArchivedDay';

import Nav from './components/Nav';
import * as utils from './utils/utils'


function testingCode() {
  return (
    <View style={styles.container}>
      {/* <TaskItem task={task} /> */}
      {/* <ArchivedDay tasks={tasks} /> */}
    </View>);
};

function testData() {
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
  
  return (tasks, stories, pastLists)
};

function convertToStories(tasks) {
  return tasks.map((task, index) => {
    return {
      taskID: task._id,
      date: task.date,
      story: task.story,
      image: task.imageURL
    }
  })
};

export default function App() {
  // TODO: Do we need a todayList? I think tasks is for today but we can clarify
  // const [todayList, setTodayList] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [pastLists, setProgress] = React.useState([]);

  // TODO: Have to make this actually grab the todayList
  React.useEffect(() => {
    utils.getTask("6448ccfa756fb0152e0e89b8").then((res) => {
      setTasks(res.data.items);
    })

    utils.getAllTasks().then((res) => {
      setStories(convertToStories(res.data))
    })

    utils.getAllTasks().then((res) => {
      setProgress(res.data)
    })
  }, []);

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
