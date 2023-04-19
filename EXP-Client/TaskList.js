import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
} from 'react-native';

export default function TaskList({ tasks, setIsPanelActive }) {
  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <Pressable onPress={() => setIsPanelActive(true)}>
          <View style={styles.pressable}>
            <View style={styles.checkbox}>
              <Text>+</Text>
            </View>
            <Text>Add Task</Text>
          </View>
        </Pressable>
        {tasks.map(({ name, deadline, completed }) => (
          <View key={name} style={styles.entry}>
            <View style={styles.checkbox}>
              <Text>{completed ? 'Y' : 'N'}</Text>
            </View>
            <Text>{name}, </Text>
            <Text>Due {deadline}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderBottomWidth: 1,
    backgroundColor: 'green',
  },
  checkbox: {
    width: '10%',
    alignItems: 'center',
  },
  entry: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
});
