import * as React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { DataTable } from 'react-native-paper';

export default function TodoList({ todos, setIsPanelActive, setViewingTodo }) {
  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <DataTable>
          <Pressable onPress={() => setIsPanelActive(true)}>
            <DataTable.Row style={styles.entry}>
              <DataTable.Cell style={{ justifyContent: 'center', flex: 1 }}>
                <Ionicons name="add-outline" size={30} color="black" />
              </DataTable.Cell>
              <DataTable.Cell style={{ flex: 5 }}>
                <Text style={{ fontSize: 20 }}>Add Todo</Text>
              </DataTable.Cell>
            </DataTable.Row>
          </Pressable>
          {todos.map(({ name, deadline, priority, completed }, index) => (
            <DataTable.Row key={name} style={styles.entry}>
              <DataTable.Cell style={{ justifyContent: 'center', flex: 1 }}>
                <Checkbox value={completed} />
              </DataTable.Cell>
              <Pressable style={{ flex: 5 }} onPress={() => setViewingTodo({ name, deadline, priority, completed })}>
                <Text multiline style={{ fontSize: 20 }}>{name}</Text>
                <Text style={{ fontSize: 10 }}>{new Date(deadline).toDateString()}</Text>
              </Pressable>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: '10%',
    justifyContent: 'center',
  },
  entry: {
    alignItems: 'center',
    height: 75,
    flexDirection: 'row',
    borderStyleBottom: 'solid',
    borderBottomWidth: 1,
    borderColor: 'black'
  },
  pressable: {
    width: '90%'
  }
});
