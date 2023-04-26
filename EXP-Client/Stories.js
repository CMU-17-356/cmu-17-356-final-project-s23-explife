import * as React from 'react';
import { Provider } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { TextInput } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';
import ProgressCircle from 'react-native-progress/Circle';

function Graph({ stories }) {
  const completedCount = 2; // stories.reduce(({ name, deadline, completed }, count) => completed ? count + 1 : count, 0);
  return (
    <View style={styles.graph}>
      <ProgressCircle
        size={80}
        progress={completedCount / stories.length}
        showsText={true}
        formatText={() => `${Math.round((completedCount / stories.length) * 100)}%`}
        style={styles.progressCircle}
      >
        <Text style={styles.progressText}>April 1, 2023</Text>
      </ProgressCircle>
    </View>
  );
}

function HeaderText({ stories }) {
  return (
    <View style={styles.headerText}>
      <Text style={{ fontSize: 20 }}>Today you have...</Text>
      {stories.map(({ name, deadline, completed }) =>
        <Text style={{ fontSize: 15 }} key={name}>{name}</Text>
      )}
    </View>
  );
}

function AddTaskMenu({ isPanelActive, setIsPanelActive }) {
  const [taskInput, setTaskInput] = React.useState('');
  const [date, setDate] = React.useState(new Date(1598051730000));
  return (
    <View>
      <BottomSheet
        visible={isPanelActive}
        onBackButtonPress={() => setIsPanelActive(false)}
        onBackdropPress={() => setIsPanelActive(false)}
      >
        <SafeAreaView style={styles.bottomNavigationView}>
          <View style={styles.popup}>
            <Text>new task info here</Text>
            <TextInput
              label="Task"
              dense={true}
              value={taskInput}
              onChangeText={(text) => setTaskInput(text)}
            />
            <Text>deadline info here</Text>
            <Text>prio information here</Text>
            <Text>button here to save info and close panel</Text>
          </View>
        </SafeAreaView>
      </BottomSheet>
    </View>
  );
}

function TaskList({ stories, setIsPanelActive }) {
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
        {stories.map(({ name, deadline, completed }) => (
          <View key={name} style={styles.entry}>
            <View style={styles.checkbox}>
              <Checkbox
                value={completed}
              />
            </View>
            <View style={styles.text}>
              <Text style={{ fontSize: 20 }}>{name}</Text>
              <Text style={{ fontSize: 10 }}>{deadline}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Todo({ stories }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  return (
    <Provider>
      <View style={styles.content}>
        <View style={styles.progress}>
          <Graph stories={stories} />
          <HeaderText stories={stories} />
        </View>
        <TaskList stories={stories} setIsPanelActive={setIsPanelActive} />
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
