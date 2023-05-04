import * as React from 'react';
import { Provider } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Appbar, List, DataTable } from 'react-native-paper';

function ProgressItem({ todo }) {

  const completedObjs = todo.items.filter((obj) => {
    return obj.completed;
  });
  
  const unfinishedObjs = todo.items.filter((obj) => {
    return !obj.completed;
  });

  const completedTasks = !completedObjs ? ["N/A"] : completedObjs.map((obj) => {
    return obj.name;
  });

  const unfinishedTasks = !unfinishedObjs ? ["N/A"] : unfinishedObjs.map((obj) => {
    return obj.name;
  });

  return (
    <View>
      <Text>Completed tasks: {completedTasks.join(', ')}</Text>
      <Text>Unfinished tasks: {unfinishedTasks.join(', ')}</Text>
    </View>
  );
}

function ProgressList({ pastLists }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <List.AccordionGroup>
          {pastLists.map((todo, index) => (
            <List.Accordion id={todo._id} key={index} style={styles.entry}
              title={new Date(todo.date).toDateString()}
              left={props => <MaterialIcons name="date-range" size={30} color="black" />}
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title={<ProgressItem todo={todo} />}></List.Item>
            </List.Accordion>
          ))}
        </List.AccordionGroup>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Progress({ pastLists }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  return (
    <Provider>
      <View style={styles.content}>
        <Appbar.Header elevated>
          <Appbar.Content title="Progress" />
        </Appbar.Header>
        <ProgressList pastLists={pastLists} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    borderBottomWidth: 1
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
    minHeight: 75,
    flexDirection: 'row'
  },
});
