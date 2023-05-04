import * as React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet, View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { DataTable } from 'react-native-paper';

export default function TodoList({ today, todos, setIsPanelActive, setViewingTodo }) {
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
            <Pressable key={name} onPress={() => setViewingTodo({ name, deadline, priority, completed })}>
              <DataTable.Row style={styles.entry}>
                <DataTable.Cell style={{ justifyContent: 'center', flex: 1 }}>
                  <Checkbox value={completed} />
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 5 }}>
                  <View>
                    <Text multiline style={{ fontSize: 20 }}>{name}</Text>
                    <Text style={{ fontSize: 10 }}>{new Date(deadline).toDateString()}</Text>
                  </View>
                </DataTable.Cell>
              </DataTable.Row>
            </Pressable>
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
