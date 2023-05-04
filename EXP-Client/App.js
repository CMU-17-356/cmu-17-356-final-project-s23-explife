import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme, Provider } from 'react-native-paper';
import Constants from 'expo-constants';

import Todo from './todo/Todo';
import Stories from './stories/Stories';
import AddStoryMenu from './stories/NewStory';
import StoryView from './stories/StoryView';
import Progress from './progress/Progress';
import TodoItem from './progress/TodoItem';
import ArchivedDay from './progress/ArchivedDay';

import Login from './components/Login';
import Nav from './components/Nav';
import * as utils from './utils/utils'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

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

function NavBar() {
  // Uncomment this to skip Login page
  const [user, setUser] = React.useState({firstName: "Test", lastName: "Test", password: "Test", email: "test@example.com"});

  // const [user, setUser] = React.useState();
  const [today, setToday] = React.useState({ items: new Array() });
  const [todos, setTodos] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [pastLists, setProgress] = React.useState([]);

  let todayTodos;

  const compareFn = (a, b) => {
    if (a.date < b.date){
      return 1;
    }
    if (a.date > b.date){
      return -1;
    }
    return 0;
  };

  const compareFnDeadline = (a, b) => {
    if (a.deadline < b.deadline){
      return -1;
    }
    if (a.deadline > b.deadline){
      return 1;
    }
    return 0;
  };

  const fetchData = () => {
    utils.getAllTodos().then((res) => {
      let data = res.data;
      data.sort(compareFn);
      let todayTodos = convertToToday(res.data);
      let todayTodoItems = todayTodos.items;
      todayTodoItems.sort(compareFnDeadline);
      if (!todayTodos) {
        todayTodos = {
          date: new Date(),
          items: [],
          user: "test"
        };
        utils.createTodo(todayTodos);
      };
      setToday(todayTodos);
      setTodos(todayTodos.items);
      setStories(convertToStories(data));
      setProgress(data);
    });
  };

  React.useEffect(() => {
    fetchData()
  }, []);

  return (
    <Provider theme={MD3LightTheme}>
      {
        (user == undefined) 
        ?
          <View style={styles.nav}>
            <Login
              setUser={setUser}
            />
          </View>
        :
          <View style={styles.nav}>
            <Nav
              Todo={<Todo today={today} todos={todos} />}
              Stories={<Stories stories={stories} />}
              Progress={<Progress pastLists={pastLists} />}
            />
          </View>
      }
      
    </Provider>
  );
};

export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="NavBar" >
        <Stack.Screen name="NavBar" component={NavBar} options={{headerShown: false}}/>
        <Stack.Screen name = "GenerateStory" component={StoryView} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
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
