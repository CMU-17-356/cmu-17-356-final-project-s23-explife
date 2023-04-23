import * as React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

export default function TaskList({ tasks, setIsPanelActive }) {
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
        {tasks.map(({ name, deadline, completed }, index) => (
          <View key={name} style={styles.entry}>
            <View style={styles.checkbox}>
              {/* TODO: Need to set tasks w/ backend
                      onValueChange={(check) => {
                        tasks = [
                          ...tasks.slice(0, index),
                          { name, deadline, check },
                          ...tasks.slice(index + 1)
                        ]
                      }}*/}
              <Checkbox
                value={completed} />
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

const styles = StyleSheet.create({
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
