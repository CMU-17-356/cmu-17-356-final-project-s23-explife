import * as React from 'react';
import { Provider } from 'react-native-paper';
import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { TextInput, DatePicker } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';
import ProgressCircle from 'react-native-progress/Circle';
import { Rating } from 'react-native-ratings';
import axios from "axios";

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

let instance = axios.create({
  baseURL: "http://localhost:19006/",
});

const [tasks, setTasks] = React.useState([]);

const getTasks = () => {
  instance.get("/lists/:id").then((response) => {
    setTasks(response.data.items);
  });
};
getTasks();

function AddTaskMenu({ isPanelActive, setIsPanelActive }) {
  const [name, setName] = React.useState('');
  const [deadline, setDeadline] = React.useState(new Date());
  const [rating, setRating] = React.useState(0);

  const handleAddTask = () => {
    const newTask = {
      taskName: name,
      deadline: deadline,
      priority: rating,
      completed: false
    };
    console.log(newTask)

    // Make API call here to update the list model

    // instance
    //   .post("/lists/:id", newDonut)
    //   .then(() => {
    //     // Clear inputs
    //     setName('')
    //     setDeadline(new Date())
    //     setRating(0)

    //     // Refresh list
    //     getTasks()
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  };

  return (
    <View>
      <BottomSheet
        visible={isPanelActive}
        onBackButtonPress={() => setIsPanelActive(false)}
        onBackdropPress={() => setIsPanelActive(false)}
      >
        <SafeAreaView style={styles.bottomNavigationView}>
          <View style={styles.popup}>
            <TextInput
              label="Task"
              dense={true}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            {/* TODO: Need to make this a date input */}
            <TextInput
              label="Deadline"
              dense={true}
              value={deadline.toISOString()}
              onChangeText={(text) => setDeadline(new Date())}
            />
            <Text>Priority</Text>
            <Rating
              imageSize={25}
              ratingCount={5}
              startingValue={rating}
              onFinishRating={() => setRating(rating)}
            />
            <Button
              title="Add Task"
              onPress={handleAddTask}
            />
          </View>
        </SafeAreaView>
      </BottomSheet>
    </View>
  );
}

function TaskList({ tasks, setIsPanelActive }) {
  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <Pressable onPress={() => setIsPanelActive(true)}>
          <View style={styles.entry}>
            <View style={styles.checkbox}>
              <Ionicons name="add-outline" size={30} color="black" />
            </View>
            <Text style={{ fontSize: 20 }}>Add Task</Text>
          </View>
        </Pressable>
        {tasks.map(({ name, deadline, completed }) => (
          <View key={name} style={styles.entry}>
            <View style={styles.checkbox}>
              <Checkbox
                value={completed}
              />
            </View>
            <View style={styles.text}>
              <Text
                multiline
                style={{ fontSize: 20 }}
              >{name}</Text>
              <Text style={{ fontSize: 10 }}>{deadline}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Todo() {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  return (
    <Provider>
      <View style={styles.content}>
        <View style={styles.progress}>
          <Graph tasks={tasks} />
          <HeaderText tasks={tasks} />
        </View>
        <TaskList tasks={tasks} setIsPanelActive={setIsPanelActive} />
        <AddTaskMenu isPanelActive={isPanelActive} setIsPanelActive={setIsPanelActive} />
      </View>
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
  popup: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    paddingTop: '5%'
  },
  content: {
    height: "100%"
  },
  checkbox: {
    width: '10%',
    alignItems: 'center',
  },
  entry: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderBottomWidth: 1,
  }
});
