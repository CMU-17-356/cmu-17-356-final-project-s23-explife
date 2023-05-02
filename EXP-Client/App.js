import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, Provider } from 'react-native-paper';
import Constants from 'expo-constants';

import Todo from './todo/Todo';
import Stories from './stories/Stories';
import Progress from './progress/Progress';
import TodoItem from './progress/TodoItem';
import ArchivedDay from './progress/ArchivedDay';

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
  const [today, setToday] = React.useState({ items: new Array() });
  const [todos, setTodos] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [pastLists, setProgress] = React.useState([]);

  const fetchData = () => {
    utils.getAllTodos().then((res) => {
      let todayTodos = convertToToday(res.data);
      if (!todayTodos) {
        todayTodos = {
          date: new Date(),
          items: [],
          user: "Test"
        };
        utils.createTodo(todayTodos)
      };
      setToday(todayTodos)
      setTodos(todayTodos.items);
      setStories(convertToStories(res.data));
      setProgress(res.data);
    });
  };

  // TODO: Have to make this actually grab the todayList
  React.useEffect(() => {
    fetchData()
  }, []);

  return (
    <Provider theme={MD3LightTheme}>
      <View style={styles.nav}>
        <Nav
          Todo={<Todo today={today} todos={todos} />}
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
