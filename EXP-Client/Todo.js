import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';

import AddTaskMenu from './AddTaskMenu';
import TaskList from './TaskList';

export default function Todo({tasks}) {
  const [isPanelActive, setIsPanelActive] = React.useState(true);
  return (
    <Provider>
      <View style={styles.content}>
        <View style={styles.progress}>
          <View style={styles.graph}>
            <Text>Graph</Text>
          </View>
          <View style={styles.text}>
            <Text>Progress</Text>
          </View>
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
    backgroundColor: 'red',
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  graph: {
    justifyContent: 'center',
    width: 150,
    backgroundColor: 'pink',
  },
  text: {
    justifyContent: 'center',
  },
  content: {
    height: "100%"
  }
});
