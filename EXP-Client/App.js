import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, Provider } from 'react-native-paper';
import Constants from 'expo-constants';

import Todo from './todo/Todo';
import Stories from './stories/Stories';
import Progress from './progress/Progress';
import TodoItem from './progress/TodoItem';
import ArchivedDay from './progress/ArchivedDay';
import AddStoryMenu from './stories/NewStory'; // TODO: remove
import Nav from './components/Nav';
import * as utils from './utils/utils'


function testingCode() {
  return (
    <View style={styles.container}>
      {/* <TodoItem todo={todo} /> */}
      {/* <ArchivedDay todos={todos} /> */}
    </View>);
};

function testData() {
  const todo = {
    name: 'Finish Project',
    deadline: new Date('2023-05-01').toLocaleDateString(),
    completed: false,
    rating: 4
  };

  const todos = [
    { name: 'Todo 1', deadline: '2023-04-20T00:00:00.000Z', priority: 4, completed: true },
    { name: 'Todo 2', deadline: '2023-04-21T00:00:00.000Z', priority: 3, completed: false },
    { name: 'Todo 3', deadline: '2023-04-22T00:00:00.000Z', priority: 2, completed: false },
    { name: 'Todo 4', deadline: '2023-04-23T00:00:00.000Z', priority: 1, completed: true }
  ];

  const stories = [
    { name: "Dish Monster Story", date: "April 22 2023", completed: true },
    { name: "Room Spider Story", date: "April 30 2023", completed: true },
    { name: "Vacuum Ghost Story", date: "May 17 2023", completed: true },
    { name: "Running Shoes Story", date: "August 34 2023", completed: true }
  ];

  const pastLists = [
    { date: '2023-04-20T00:00:00.000Z' },
    { date: '2023-04-21T00:00:00.000Z' },
    { date: '2023-04-22T00:00:00.000Z' },
    { date: '2023-04-23T00:00:00.000Z' }
  ];

  return (todos, stories, pastLists)
};

function convertToStories(todos) {
  return todos.map((todo, index) => {
    return {
      todoID: todo._id,
      date: todo.date,
      story: todo.story,
      image: todo.imageURL
    }
  })
};

export default function App() {
  // TODO: Do we need a todayList? I think todos is for today but we can clarify
  // const [todayList, setTodayList] = React.useState([]);
  const [todos, setTodos] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [pastLists, setProgress] = React.useState([]);

  const [isPanelActive, setIsPanelActive] = React.useState(true); // TODO: Remove after new story testing

  // TODO: Have to make this actually grab the todayList
  React.useEffect(() => {
    utils.getTodo("644d8897102c5af4806c0e9c").then((res) => {
      setTodos(res.data.items);
    })

    utils.getAllTodos().then((res) => {
      setStories(convertToStories(res.data))
    })

    utils.getAllTodos().then((res) => {
      setProgress(res.data)
    })
  }, []);

  console.log(todos);

  return (
    <Provider theme={MD3LightTheme}>
      <View style={styles.nav}>
        <Nav
          Todo={<Todo todos={todos} />}
          Stories={<Stories stories={stories} />}
          // Stories= {<AddStoryMenu isPanelActive = {isPanelActive} setIsPanelActive={setIsPanelActive} />}
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
