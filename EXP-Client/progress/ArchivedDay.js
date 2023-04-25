import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable
} from 'react-native';
import Checkbox from 'expo-checkbox';
import ProgressCircle from 'react-native-progress/Circle';

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
      <Text style={{ fontSize: 20 }}>On this day you had...</Text>
      {tasks.map(({ name, deadline, completed }) =>
        <Text style={{ fontSize: 15 }} key={name}>{name}</Text>
      )}
    </View>
  );
}
  
export default function ArchivedDay({ tasks }) {
  
  const [completedCount, setCompletedCount] = useState(0); // TODO: Need to actually update the completed count

  return (
    // <Provider>
      <View style={styles.content}>
        <View style={styles.progress}>
          <Graph tasks={tasks} />
          <HeaderText tasks={tasks} />
        </View>
        <SafeAreaView>
          <ScrollView bounces={false}>
            {tasks.map((item, index) => (
              <Pressable
                // TODO: Actually navigate to the detailed view 
                onPress={() => console.log('Navigate to TaskItem')}
              >
                <View key={item.name} style={styles.entry}>
                  <View style={styles.checkbox}>
                    <Checkbox
                      value={item.completed} />
                  </View>
                  <View style={styles.text}>
                    <Text
                      multiline
                      style={{ fontSize: 20 }}  
                    >{item.name}</Text>
                    <Text style={{ fontSize: 10 }}>{item.deadline}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  content: {
    height: '100%'
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
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  taskDetails: {
    marginLeft: 10,
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progress: {
    height: 150,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  progressCircle: {
    margin: 16,
  },
  summaryText: {
    marginTop: 5,
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
  },
});
